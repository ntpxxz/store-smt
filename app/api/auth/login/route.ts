import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '@/lib/prisma';
import { validateRequest, loginSchema } from '@/lib/validation';
import { createResponse, createErrorResponse } from '@/lib/auth';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate request
        const validation = validateRequest(loginSchema, body);
        if (!validation.success) {
            return createErrorResponse(validation.error, 400);
        }

        const { email, password } = validation.data;

        // Find user
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return createErrorResponse('Invalid email or password', 401);
        }

        // Verify password
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return createErrorResponse('Invalid email or password', 401);
        }

        // Create JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
            expiresIn: '7d',
        });

        // Create session
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);

        await prisma.session.create({
            data: {
                userId: user.id,
                token,
                expiresAt,
            },
        });

        // Return user data and token
        return createResponse({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        return createErrorResponse('Login failed', 500);
    }
}
