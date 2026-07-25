import "./globals.css";

export const metadata = {
  title: "S & E Handyman — Seattle & Eastside Handyman | Se Habla Español",
  description:
    "Work directly with Jaime for repairs, installations, drywall, carpentry, and remodeling across Seattle and the Eastside. Licensed, bonded, and insured since 2011. Free estimates in English or Spanish.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
