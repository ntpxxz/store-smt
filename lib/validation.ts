import { z } from 'zod';

// User Validation
export const loginSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    name: z.string().min(2, 'Name must be at least 2 characters'),
    role: z.enum(['ADMIN', 'OPERATOR', 'VIEWER']).optional(),
});

// Part/Inventory Validation
export const partSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    qty: z.number().int().min(0, 'Quantity must be positive'),
    unit: z.string().min(1, 'Unit is required'),
    status: z.enum(['normal', 'low', 'critical', 'fast']),
    icon: z.string(),
    sku: z.string().min(1, 'SKU is required'),
    location: z.string().min(1, 'Location is required'),
    locationStatus: z.enum(['Available', 'Reserved', 'On Hold']).optional(),
});

export const moveInventorySchema = z.object({
    qty: z.number().int().min(1, 'Quantity must be at least 1'),
    destination: z.string().min(1, 'Destination is required'),
    type: z.enum(['transfer', 'inbound', 'adjustment']),
});

// Production Order Validation
export const productionOrderSchema = z.object({
    id: z.string().min(1, 'MO ID is required'),
    status: z.enum(['ready', 'scheduled', 'urgent', 'completed', 'cancelled']),
    line: z.string().min(1, 'Production line is required'),
    description: z.string().min(1, 'Description is required'),
    dueTime: z.string(),
    progress: z.number().int().min(0).max(100),
});

export const pickPartSchema = z.object({
    bomItemId: z.string().uuid('Invalid BOM item ID'),
});

// Inbound Validation
export const inboundReceiveSchema = z.object({
    itemId: z.string().uuid('Invalid item ID'),
    receivedQty: z.number().int().min(1, 'Received quantity must be at least 1'),
});

export const inboundInvoiceSchema = z.object({
    id: z.string().min(1, 'Invoice ID is required'),
    vendor: z.string().min(1, 'Vendor is required'),
    po: z.string().min(1, 'PO number is required'),
    status: z.enum(['pending', 'iqc', 'putaway', 'completed']).optional(),
});

// Helper function to validate request body
export function validateRequest<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; error: string } {
    try {
        const validated = schema.parse(data);
        return { success: true, data: validated };
    } catch (error) {
        if (error instanceof z.ZodError) {
            const firstError = error.errors[0];
            return { success: false, error: firstError.message };
        }
        return { success: false, error: 'Validation failed' };
    }
}
