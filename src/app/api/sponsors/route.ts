import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';


export const dynamic = 'force-dynamic';


export const GET = async () => {
    try {
        const sponsors = await get('sponsors');
        return NextResponse.json(sponsors);
    } catch (error) {
        throw new Error((error as Error).message);
    }
}