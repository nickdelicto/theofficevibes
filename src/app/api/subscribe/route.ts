import { NextResponse } from 'next/server';

/**
 * API Route - Email Subscription Handler
 * 
 * Purpose: Save email signups (using Google Sheets for now)
 * 
 * Future options:
 * - Google Sheets API (free, instant)
 * - ConvertKit (free tier up to 1000 subscribers)
 * - Mailchimp (free tier up to 500 contacts)
 * - Custom database
 * 
 * For now: Just logs to console (you can upgrade later)
 */

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service
    // For now, just log it (you can check server logs)
    console.log('📧 New email signup:', email, new Date().toISOString());

    // In production, you'd do something like:
    // await saveToGoogleSheets(email);
    // or
    // await convertkit.subscribe(email);
    // or
    // await mailchimp.addSubscriber(email);

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email subscription error:', error);
    return NextResponse.json(
      { error: 'Subscription failed' },
      { status: 500 }
    );
  }
}

