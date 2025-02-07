import { NextResponse } from 'next/server';
import { db, users } from '@/db/index';

export async function GET() {
  const allUsers = await db.select().from(users);
  return NextResponse.json(allUsers);
}
