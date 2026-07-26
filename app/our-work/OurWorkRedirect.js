"use client";

import { useEffect } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const target = `${basePath}/past-work/`;

export default function OurWorkRedirect() {
  useEffect(() => {
    // replace, not assign, so the dead URL stays out of the back button.
    window.location.replace(target);
  }, []);

  return (
    <main id="top" data-theme="warm">
      <div className="site-shell">
        <section className="redirect-notice">
          <p>This page moved.</p>
          <a className="button primary" href={target}>Go to Past Work</a>
        </section>
      </div>
    </main>
  );
}
