import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

export interface AuthUser {
    id: string;
    email: string;
    name: string;
    role: string;
}

export async function verifyAuth(request: NextRequest): Promise<{ user: AuthUser } | { error: string; status: number }> {
    try {
        const authHeader = request.headers.get('authorization');

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return { error: 'No authorization token provided', status: 401 };
        }

        const token = authHeader.substring(7);

        // Verify JWT
        const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

        // Check if session exists and is valid
        const session = await prisma.session.findUnique({
            where: { token },
            include: { user: true },
        });

        if (!session) {
            return { error: 'Invalid or expired token', status: 401 };
        }

        if (new Date() > session.expiresAt) {
            // Delete expired session
            await prisma.session.delete({ where: { id: session.id } });
            return { error: 'Token expired', status: 401 };
        }

        return {
            user: {
                id: session.user.id,
                email: session.user.email,
                name: session.user.name,
                role: session.user.role,
            },
        };
    } catch (error) {
        console.error('Auth verification error:', error);
        return { error: 'Invalid token', status: 401 };
    }
}

export function requireRole(allowedRoles: string[]) {
    return async (request: NextRequest): Promise<{ user: AuthUser } | { error: string; status: number }> => {
        const authResult = await verifyAuth(request);

        if ('error' in authResult) {
            return authResult;
        }

        if (!allowedRoles.includes(authResult.user.role)) {
            return { error: 'Insufficient permissions', status: 403 };
        }

        return authResult;
    };
}

export function createResponse(data: any, status: number = 200) {
    return NextResponse.json({ success: true, data }, { status });
}

export function createErrorResponse(message: string, status: number = 400) {
    return NextResponse.json({ success: false, message }, { status });
}
