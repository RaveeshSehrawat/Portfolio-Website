import { google } from 'googleapis';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Configure Google Sheets
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Get the current date and time
    const date = new Date().toLocaleString();

    // Append the data to the sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEETS_SHEET_ID,
      range: 'Sheet1!A:D', // Adjust the range according to your sheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[date, name, email, message]],
      },
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return Response.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
