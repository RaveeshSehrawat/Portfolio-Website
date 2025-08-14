# Portfolio Website

A modern, responsive portfolio website built with Next.js and styled with an oceanic theme. Features smooth animations, dark mode support, and a contact form integrated with Google Sheets.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom oceanic theme
- **UI Components**: Custom components with animated oceanic effects
- **Dark Mode**: Theme switching with next-themes
- **Contact Form**: Google Sheets API integration for form submissions
- **Animations**: Custom CSS animations for floating, waves, and bubbles

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up Google Sheets API:
   - Create a Google Cloud Project
   - Enable Google Sheets API
   - Create service account credentials
   - Share your Google Sheet with the service account email
   - Add the credentials to your .env.local file:

```env
GOOGLE_SHEETS_PRIVATE_KEY=your_private_key
GOOGLE_SHEETS_CLIENT_EMAIL=your_client_email
GOOGLE_SHEETS_SHEET_ID=your_sheet_id
```

4. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
