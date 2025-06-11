import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secretApiKey, ...data } = body;

    const response = await fetch('https://lockr.so/api/v1/lockers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: responseData.message || 'Failed to create locker' },
        { status: response.status }
      );
    }

    return NextResponse.json(responseData);
  } catch (_error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
