import { NextRequest } from 'next/server';
import { verifyAuth, createResponse, createErrorResponse } from '@/lib/auth';

const AI_INSIGHTS = [
    "Focus on MO #2401 - Due in 2 hours, all parts ready",
    "Bin A-05 is running low on USB-C cables - restock recommended",
    "Peak efficiency detected - 42 items/hour average today",
    "Consider moving Battery Packs to Aisle B for faster access",
    "3 urgent orders waiting - prioritize MO #2403 first",
];

export async function GET(request: NextRequest) {
    const authResult = await verifyAuth(request);
    if ('error' in authResult) {
        return createErrorResponse(authResult.error, authResult.status);
    }

    try {
        // Return random insight (in production, this would be AI-generated)
        const insight = AI_INSIGHTS[Math.floor(Math.random() * AI_INSIGHTS.length)];

        return createResponse({ insight });
    } catch (error) {
        console.error('Get insights error:', error);
        return createErrorResponse('Failed to fetch insights', 500);
    }
}