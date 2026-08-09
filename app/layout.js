import Script from "next/script";

import "./globals.css";

export const metadata = {
  title: "S & E Handyman — Seattle & Eastside Handyman | Se Habla Español",
  description:
    "Work directly with Jaime for repairs, installations, drywall, carpentry, and remodeling across Seattle and the Eastside. Licensed, bonded, and insured since 2011. Free estimates in English or Spanish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          id="ghl-chat-widget"
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="6a78302db0aa0f9282c5e604"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
