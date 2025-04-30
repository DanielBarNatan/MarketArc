import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // SP500 history fetch logic here
    return NextResponse.json({ data: [] });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch SP500 history' }, { status: 500 });
  }
}