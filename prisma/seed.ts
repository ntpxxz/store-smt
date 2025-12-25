import { PrismaClient } from '../generated/prisma-client-v2';
import { INITIAL_INVENTORY, INITIAL_MO_LIST, INITIAL_INBOUND } from '../lib/constants';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seeding...');

    // 1. Clear existing data
    await prisma.bOMItem.deleteMany();
    await prisma.movement.deleteMany();
    await prisma.part.deleteMany();
    await prisma.productionOrder.deleteMany();
    await prisma.inboundItem.deleteMany();
    await prisma.inboundInvoice.deleteMany();
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();

    console.log('Cleared existing data.');

    // 2. Create Admin User
    const hashedPassword = bcrypt.hashSync('password123', 10);
    const admin = await prisma.user.create({
        data: {
            email: 'admin@warehouse.os',
            password: hashedPassword,
            name: 'Admin User',
            role: 'ADMIN',
        },
    });
    console.log('Created admin user.');

    // 3. Seed Inventory (Parts & Movements)
    for (const p of INITIAL_INVENTORY) {
        const part = await prisma.part.create({
            data: {
                id: p.id,
                name: p.name,
                qty: p.qty,
                unit: p.unit,
                status: p.status,
                icon: p.icon,
                sku: p.sku,
                location: p.location,
                locationStatus: p.locationStatus || 'Available',
            },
        });

        if (p.movements) {
            for (const m of p.movements) {
                await prisma.movement.create({
                    data: {
                        date: new Date(m.date),
                        qty: m.qty,
                        source: m.source,
                        destination: m.destination,
                        type: m.type,
                        partId: part.id,
                    },
                });
            }
        }
    }
    console.log(`Seeded ${INITIAL_INVENTORY.length} parts.`);

    // 4. Seed Production Orders (MOs & BOMItems)
    for (const mo of INITIAL_MO_LIST) {
        await prisma.productionOrder.create({
            data: {
                id: mo.id,
                status: mo.status,
                line: mo.line,
                description: mo.description,
                dueTime: mo.dueTime,
                progress: mo.progress,
                parts: {
                    create: mo.parts.map((p) => ({
                        id: p.id,
                        name: p.name,
                        requiredQty: p.requiredQty,
                        picked: p.picked,
                        unit: p.unit,
                    })),
                },
            },
        });
    }
    console.log(`Seeded ${INITIAL_MO_LIST.length} production orders.`);

    // 5. Seed Inbound Invoices
    for (const inv of INITIAL_INBOUND) {
        await prisma.inboundInvoice.create({
            data: {
                id: inv.id,
                vendor: inv.vendor,
                po: inv.po,
                status: inv.status,
                items: {
                    create: inv.items.map((i) => ({
                        id: i.id,
                        name: i.name,
                        sku: i.sku,
                        qty: i.qty,
                        unit: i.unit,
                        received: i.received,
                        receivedQty: i.receivedQty || 0,
                    })),
                },
            },
        });
    }
    console.log(`Seeded ${INITIAL_INBOUND.length} inbound invoices.`);

    console.log('Seeding completed successfully.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
