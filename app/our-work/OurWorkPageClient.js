"use client";

import { useState } from "react";

import { Icon, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { ServiceSelect } from "../components/ServiceSelect";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPath = (path) => `${basePath}${path}`;


function submitQuote(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const contact = String(form.get("contact") || "").trim();
  const service = String(form.get("service") || "").trim();
  const message = String(form.get("message") || "").trim();
  const body = [
    `Name: ${name || "Not provided"}`,
    `Phone or email: ${contact || "Not provided"}`,
    `Service: ${service || "Not sure yet"}`,
    "",
    "Project details:",
    message || "Not provided",
  ].join("\n");

  window.location.href = `mailto:sehandymanllc@gmail.com?subject=${encodeURIComponent(`Project estimate request from ${name || "website visitor"}`)}&body=${encodeURIComponent(body)}`;
}

export default function OurWorkPageClient({ groups = [] }) {
  const [filter, setFilter] = useState("All");

  // Only categories that actually have photos get a filter button, so an empty
  // folder never leaves the visitor staring at a blank grid.
  const stocked = groups.filter((group) => group.images.length > 0);
  const photos = stocked.flatMap((group) =>
    group.images.map((image) => ({ src: image, label: group.label })),
  );
  const filters = ["All", ...stocked.map((group) => group.label)];
  const visible = filter === "All" ? photos : photos.filter((photo) => photo.label === filter);

  return (
    <main id="top" data-theme="warm" className="work-page">
      <div className="site-shell">
        <SiteHeader current="work" />

        <section className="work-head">
          <h1>Our past work</h1>
          <nav className="work-filters" aria-label="Filter work by service">
            {filters.map((name) => (
              <button
                className={filter === name ? "active" : ""}
                onClick={() => setFilter(name)}
                aria-pressed={filter === name}
                key={name}
              >
                {name === "All" ? "All work" : name}
              </button>
            ))}
          </nav>
        </section>

        <section className="work-gallery" id="projects" aria-label="Project gallery">
          {visible.map((photo) => (
            <figure className="work-tile" key={photo.src}>
              <img
                src={assetPath(photo.src)}
                alt={`${photo.label} work by S and E Handyman`}
                loading="lazy"
              />
              <figcaption>{photo.label}</figcaption>
            </figure>
          ))}
        </section>

        <section className="work-proof-strip" aria-label="S and E Handyman work standards">
          <div><strong>Since 2011</strong><span>Serving local homeowners</span></div>
          <div><strong>Six specialties</strong><span>One dependable point of contact</span></div>
          <div><strong>English &amp; Spanish</strong><span>Clear, comfortable communication</span></div>
          <div><strong>Licensed · Bonded · Insured</strong><span>Professional peace of mind</span></div>
        </section>

        <section className="work-standard">
          <div className="work-standard-heading">
            <span className="kicker">What you can expect</span>
            <h2>The finished work is only part of a good experience.</h2>
          </div>
          <div className="work-standard-list">
            <article>
              <span>01</span>
              <h3>A clear conversation first</h3>
              <p>I listen to what you need, ask the right questions, and explain the next step in plain language.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Respect for your home</h3>
              <p>Careful prep and a clean work area are part of the job for me—not an afterthought.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Details that hold up</h3>
              <p>I finish with an eye on safety, function, and how it will look and work years from now.</p>
            </article>
          </div>
        </section>

        <section className="work-review">
          <div className="work-review-rating">
            <span>★★★★★</span>
            <strong>5.0 Google rating</strong>
          </div>
          <blockquote>
            “Jaime did a great job fixing our electrical issues in our house. Now he is
            the guy we call anytime we need help. Very friendly and professional.”
          </blockquote>
          <div className="work-review-author">
            <img src={assetPath("/reviewers/javi-bushido.png")} alt="Javi Bushido" />
            <span><strong>Javi Bushido</strong><small>Google review</small></span>
          </div>
          <a
            href="https://maps.app.goo.gl/pdkY8Qmwz6BaGovr7"
            target="_blank"
            rel="noreferrer"
          >
            Read all my reviews <Icon name="arrow" />
          </a>
        </section>

        <section className="estimate" id="estimate">
          <div>
            <span className="kicker">Have a project in mind?</span>
            <h2>Let’s create your<br />next success story.</h2>
            <p>
              Tell me what you would like to repair or improve. English or Spanish, both
              welcome—and the estimate is always free.
            </p>
          </div>
          <form onSubmit={submitQuote}>
            <label>
              <span>Your name</span>
              <input name="name" type="text" placeholder="Jane Smith" autoComplete="name" required />
            </label>
            <label>
              <span>Phone or email</span>
              <input name="contact" type="text" placeholder="How should I reach you?" required />
            </label>
            <ServiceSelect />
            <label className="wide">
              <span>Tell me what you would like to accomplish</span>
              <textarea name="message" placeholder="A quick description, location, and preferred timing..." required />
            </label>
            <button className="button primary" type="submit">
              Request my free estimate <Icon name="arrow" />
            </button>
            <small>I usually reply within one business day.</small>
          </form>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
