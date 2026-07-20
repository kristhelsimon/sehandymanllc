import "./globals.css";

export const metadata = {
  title: "S & E Handyman — Website Concepts",
  description: "Three modern website directions for S & E Handyman.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
