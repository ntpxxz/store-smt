import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { comparePassword } from '@/lib/auth';
import { generateTokenJose } from '@/lib/jose-auth';
import { successResponse, errorResponse } from '@/lib/api-response';

export async function POST(request: Request) {
    try {
        let body;
        try {
            body = await request.json();
        } catch (jsonError) {
            return errorResponse('Invalid JSON body', 400);
        }

        const { email, password } = body;

        if (!email || !password) {
            return errorResponse('Missing email or password', 400);
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user || !(await comparePassword(password, user.password))) {
            return errorResponse('Invalid email or password', 401);
        }

        const token = await generateTokenJose({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        // Create session record
        await prisma.session.create({
            data: {
                userId: user.id,
                token,
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            },
        });

        return successResponse({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
            token,
        });
    } catch (error: any) {
        console.error('Login error:', error);
        return errorResponse('Internal server error', 500);
    }
}
