import { NextResponse } from 'next/server';
import { db } from '@/db';

export async function GET() {
  const result = await db.execute('SELECT 1');
  return NextResponse.json(result);
}
