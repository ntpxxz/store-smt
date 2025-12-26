import { NextRequest } from 'next/server';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/prisma';
import { validateRequest, registerSchema } from '@/lib/validation';
import { createResponse, createErrorResponse } from '@/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate request
        const validation = validateRequest(registerSchema, body);
        if (!validation.success) {
            return createErrorResponse(validation.error, 400);
        }

        const { email, password, name, role } = validation.data;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return createErrorResponse('User with this email already exists', 409);
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role: role || 'OPERATOR',
            },
        });

        return createResponse({
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
        }, 201);
    } catch (error) {
        console.error('Registration error:', error);
        return createErrorResponse('Registration failed', 500);
    }
}
