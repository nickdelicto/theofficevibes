import { NextResponse } from 'next/server';
import { google } from 'googleapis';

/**
 * API Route - Email Subscription Handler
 * 
 * Purpose: Save email signups to Google Sheets
 * Credentials stored in .env.local (never commit this file!)
 */

// Initialize Google Sheets API client
async function getGoogleSheetsClient() {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
}

// Save email to Google Sheet
async function saveEmailToSheet(email: string) {
  const sheets = await getGoogleSheetsClient();
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  const now = new Date().toISOString();
  const values = [[email, now, 'website']]; // Email, Date, Source

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'Sheet1!A:C', // Assumes your sheet is named "Sheet1"
    valueInputOption: 'USER_ENTERED',
    requestBody: { values },
  });
}

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

    // Save to Google Sheets
    await saveEmailToSheet(email);
    
    // Also log for backup
    console.log('📧 New email signup:', email, new Date().toISOString());

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

