import OurWorkRedirect from "./OurWorkRedirect";

// The page lives at /past-work/ now. This stub keeps the old URL working for
// anything already linking to it. A static export cannot issue a real 3xx, so
// it redirects client side and tells crawlers the canonical location.
export const metadata = {
  title: "Past Work | S & E Handyman",
  alternates: { canonical: "/past-work/" },
  robots: { index: false, follow: true },
};

export default function OurWorkPage() {
  return <OurWorkRedirect />;
}
