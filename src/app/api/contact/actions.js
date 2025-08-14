"use server"

import { google } from "googleapis";

const GOOGLE_SHEETS_ID = process.env.GOOGLE_SHEETS_ID;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

export async function submitContactForm(formData) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: GOOGLE_CLIENT_EMAIL,
        private_key: GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    const timestamp = new Date().toISOString();

    await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_ID,
      range: "Sheet1!A:D", // Adjust based on your sheet structure
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, name, email, message]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error submitting to Google Sheets:", error);
    return { success: false, error: "Failed to submit form" };
  }
}
