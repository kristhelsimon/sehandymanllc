"use client";

import { Icon, SiteFooter, SiteHeader } from "../components/SiteChrome";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPath = (path) => `${basePath}${path}`;
const pagePath = (path) => `${basePath}${path}`;

const projects = [
  {
    number: "01",
    title: "Finish details that feel built in",
    category: "Finish Carpentry",
    description: "Trim, shelving, doors, and detailed woodwork completed for a clean, intentional finish.",
    image: assetPath("/services/finish-carpentry.webp"),
    className: "wide",
  },
  {
    number: "02",
    title: "Lighting that improves the room",
    category: "Electrical & Lighting",
    description: "Thoughtful fixture and lighting work handled with careful preparation and attention to safety.",
    image: assetPath("/services/electrical-lighting.webp"),
    className: "standard",
  },
  {
    number: "03",
    title: "Installations done securely",
    category: "Installations",
    description: "Fixtures, hardware, appliances, and household items installed correctly and ready to use.",
    image: assetPath("/services/installations.webp"),
    className: "standard",
  },
  {
    number: "04",
    title: "Repairs that restore the space",
    category: "Maintenance & Repairs",
    description: "Practical home repairs completed efficiently, respectfully, and with a lasting result in mind.",
    image: assetPath("/services/maintenance-repairs.webp"),
    className: "wide",
  },
  {
    number: "05",
    title: "Walls finished cleanly",
    category: "Drywall & Painting",
    description: "Patches, texture work, touch-ups, and painting blended carefully into the surrounding room.",
    image: assetPath("/services/drywall-painting.webp"),
    className: "wide",
  },
  {
    number: "06",
    title: "Improvements built around the home",
    category: "Remodeling",
    description: "Larger upgrades coordinated with clear communication from preparation through the final details.",
    image: assetPath("/services/remodeling.webp"),
    className: "standard",
  },
];

function submitQuote(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const name = String(form.get("name") || "").trim();
  const contact = String(form.get("contact") || "").trim();
  const projectType = String(form.get("projectType") || "").trim();
  const message = String(form.get("message") || "").trim();
  const body = [
    `Name: ${name || "Not provided"}`,
    `Phone or email: ${contact || "Not provided"}`,
    `Project type: ${projectType || "Not sure yet"}`,
    "",
    "Project details:",
    message || "Not provided",
  ].join("\n");

  window.location.href = `mailto:sehandymanllc@gmail.com?subject=${encodeURIComponent(`Project estimate request from ${name || "website visitor"}`)}&body=${encodeURIComponent(body)}`;
}

export default function OurWorkPageClient() {
  return (
    <main id="top" data-theme="warm" className="work-page">
      <div className="site-shell">
        <SiteHeader current="work" />

        <section className="work-hero">
          <div className="work-hero-copy">
            <span className="kicker">My work</span>
            <h1>Careful work.<br />Visible results.</h1>
            <p>
              A look at the repairs, installations, finish work, and home improvements
              I handle for homeowners across Seattle and the Eastside—most of them for
              neighbors who called me back a second and third time.
            </p>
            <div className="work-hero-actions">
              <a className="button primary" href="#projects">
                Explore the work <Icon name="arrow" />
              </a>
              <a className="work-text-link" href="#estimate">Start a similar project</a>
            </div>
          </div>
          <div className="work-hero-collage" aria-label="Examples of S and E Handyman work">
            <figure className="work-collage-main">
              <img src={assetPath("/services/finish-carpentry.webp")} alt="Detailed finish carpentry work" />
            </figure>
            <figure>
              <img src={assetPath("/services/electrical-lighting.webp")} alt="Residential electrical and lighting work" />
            </figure>
            <figure>
              <img src={assetPath("/services/remodeling.webp")} alt="Residential home improvement work" />
            </figure>
          </div>
        </section>

        <section className="work-proof-strip" aria-label="S and E Handyman work standards">
          <div><strong>Since 2011</strong><span>Serving local homeowners</span></div>
          <div><strong>Six specialties</strong><span>One dependable point of contact</span></div>
          <div><strong>English &amp; Spanish</strong><span>Clear, comfortable communication</span></div>
          <div><strong>Licensed · Bonded · Insured</strong><span>Professional peace of mind</span></div>
        </section>

        <section className="work-intro">
          <div>
            <span className="kicker">Project gallery</span>
            <h2>Details matter—whether the job is large or small.</h2>
          </div>
          <div>
            <p>
              Every project starts with me understanding what you actually need. Then I
              prepare the space, do the work carefully, and keep you in the loop right
              through the final walkthrough.
            </p>
            <a href={pagePath("/services/")}>Explore all services <Icon name="arrow" /></a>
          </div>
        </section>

        <section className="work-gallery" id="projects" aria-label="Project gallery">
          {projects.map((project) => (
            <article className={`work-project ${project.className}`} key={project.number}>
              <div className="work-project-image">
                <img src={project.image} alt={`${project.category} project example`} />
                <span>{project.number}</span>
              </div>
              <div className="work-project-copy">
                <span>{project.category}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <a href="#estimate">Discuss a project like this <Icon name="arrow" /></a>
              </div>
            </article>
          ))}
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
            <label className="wide">
              <span>What kind of project is it?</span>
              <select name="projectType" defaultValue="">
                <option value="">Select a project type or choose “Not sure”</option>
                {projects.map((project) => <option key={project.number}>{project.category}</option>)}
                <option>Not sure yet</option>
              </select>
            </label>
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
