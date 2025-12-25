import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyTokenJose } from './lib/jose-auth';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Define public routes
    const isPublicRoute =
        pathname.startsWith('/api/auth/login') ||
        pathname.startsWith('/api/auth/register') ||
        !pathname.startsWith('/api'); // Only protect API routes for now

    if (isPublicRoute) {
        return NextResponse.next();
    }

    // 2. Check for authentication token
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.startsWith('Bearer ') ? authHeader.substring(7) : null;

    if (!token) {
        return NextResponse.json(
            { success: false, message: 'Authentication required' },
            { status: 401 }
        );
    }

    // 3. Verify token
    const decoded = await verifyTokenJose(token);
    if (!decoded) {
        return NextResponse.json(
            { success: false, message: 'Invalid or expired token' },
            { status: 401 }
        );
    }

    // 4. Add user info to headers for downstream use
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-user-id', decoded.userId);
    requestHeaders.set('x-user-role', decoded.role);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: '/api/:path*',
};
