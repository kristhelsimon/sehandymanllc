"use client";

import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const pagePath = (path) => `${basePath}${path}`;

export function Icon({ name }) {
  const paths = {
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    facebook: <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" />,
    whatsapp: (
      <>
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 21l1.6-4.7a8.5 8.5 0 1 1 15.9-4.6Z" />
        <path d="M8.4 7.6c.3-.3.7-.2.9.1l1 2c.1.3.1.6-.2.8l-.7.6c.7 1.5 1.9 2.7 3.5 3.3l.6-.8c.2-.3.5-.4.8-.2l1.9.9c.4.2.5.6.3.9-.5.9-1.4 1.5-2.4 1.4-4.4-.4-7.8-3.8-8.1-8.1-.1-.4.2-.7.4-.9Z" />
      </>
    ),
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

export function Brand() {
  return (
    <a className="brand" href={pagePath("/")} aria-label="S and E Handyman home">
      <span className="brand-mark">
        <span>S</span>
        <i>&amp;</i>
        <span>E</span>
      </span>
      <span className="brand-copy">
        <strong>HANDYMAN</strong>
        <small>SEATTLE &amp; EASTSIDE</small>
      </span>
    </a>
  );
}

export function SiteHeader({ current = "" }) {
  const [menu, setMenu] = useState(false);
  const links = [
    ["services", "Services", pagePath("/services/")],
    ["work", "Our work", pagePath("/#work")],
    ["reviews", "Reviews", pagePath("/#reviews")],
    ["about", "About", pagePath("/#about")],
  ];

  return (
    <>
      <div className="utility">
        <p>Monday–Saturday · 7am–7pm · English &amp; Spanish</p>
        <div className="utility-contact">
          <a className="utility-link mobile" href="tel:2066703045">
            <Icon name="phone" />
            <span><small>Mobile</small>(206) 670-3045</span>
          </a>
          <a className="utility-link office" href="tel:2064919633">
            <Icon name="phone" />
            <span><small>Office</small>(206) 491-9633</span>
          </a>
          <a className="utility-link email" href="mailto:sehandymanllc@gmail.com">
            <Icon name="mail" />
            <span><small>Email us</small>sehandymanllc@gmail.com</span>
          </a>
          <span className="utility-socials">
            <span className="follow-label">Follow us</span>
            <a
              className="social-link"
              href="https://www.facebook.com/share/1Frn7mjgpb/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow S and E Handyman on Facebook"
            >
              <Icon name="facebook" />
            </a>
            <a
              className="social-link"
              href="https://wa.me/12064919633"
              target="_blank"
              rel="noreferrer"
              aria-label="Chat with S and E Handyman on WhatsApp"
            >
              <Icon name="whatsapp" />
            </a>
          </span>
        </div>
      </div>

      <header>
        <Brand />
        <nav className={menu ? "open" : ""} aria-label="Main navigation">
          {links.map(([key, label, href]) => (
            <a
              className={current === key ? "active" : ""}
              href={href}
              aria-current={current === key ? "page" : undefined}
              onClick={() => setMenu(false)}
              key={key}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#estimate">Get an estimate</a>
        <button
          className="menu-button"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
          aria-expanded={menu}
        >
          <span />
          <span />
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Brand />
      <div className="footer-links">
        <a href={pagePath("/services/")}>Services</a>
        <a href={pagePath("/#work")}>Our work</a>
        <a href={pagePath("/#reviews")}>Reviews</a>
        <a href={pagePath("/#about")}>About</a>
      </div>
      <div className="footer-contact">
        <small>Mobile</small>
        <a href="tel:2066703045">(206) 670-3045</a>
        <small>Office</small>
        <a href="tel:2064919633">(206) 491-9633</a>
        <a className="footer-email" href="mailto:sehandymanllc@gmail.com">sehandymanllc@gmail.com</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 S &amp; E Handyman LLC</span>
        <span>Licensed · Bonded · Insured · English &amp; Spanish</span>
      </div>
    </footer>
  );
}
