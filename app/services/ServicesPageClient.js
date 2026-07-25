"use client";

import { Icon, SiteFooter, SiteHeader } from "../components/SiteChrome";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPath = (path) => `${basePath}${path}`;

const services = [
  {
    number: "01",
    slug: "finish-carpentry",
    title: "Finish Carpentry",
    intro: "Clean, detailed woodwork that makes a home feel complete.",
    image: assetPath("/services/finish-carpentry.webp"),
    items: ["Trim and baseboards", "Interior doors and hardware", "Shelving and built-ins", "Woodwork repairs and finishing"],
  },
  {
    number: "02",
    slug: "electrical-lighting",
    title: "Electrical & Lighting",
    intro: "Careful troubleshooting, fixture work, and practical electrical upgrades.",
    image: assetPath("/services/electrical-lighting.webp"),
    items: ["Lighting and ceiling fans", "Outlets and switches", "Electrical troubleshooting", "Fixture and appliance connections"],
  },
  {
    number: "03",
    slug: "installations",
    title: "Installations",
    intro: "Household fixtures and equipment installed securely and correctly.",
    image: assetPath("/services/installations.webp"),
    items: ["Appliances and fixtures", "TVs, shelving, and hardware", "Blinds and window treatments", "Home accessories and equipment"],
  },
  {
    number: "04",
    slug: "maintenance-repairs",
    title: "Maintenance & Repairs",
    intro: "Dependable help for the fixes and upkeep that keep your home working.",
    image: assetPath("/services/maintenance-repairs.webp"),
    items: ["Home maintenance lists", "Doors, windows, and hardware", "Caulking and weatherproofing", "Urgent and everyday repairs"],
  },
  {
    number: "05",
    slug: "drywall-painting",
    title: "Drywall & Painting",
    intro: "Smooth repairs and careful finishing that blend back into your space.",
    image: assetPath("/services/drywall-painting.webp"),
    items: ["Drywall patches and repair", "Texture matching", "Interior painting", "Wall and ceiling touch-ups"],
  },
  {
    number: "06",
    slug: "remodeling",
    title: "Remodeling",
    intro: "Thoughtful room improvements managed with communication and care.",
    image: assetPath("/services/remodeling.webp"),
    items: ["Kitchen improvements", "Bathroom remodeling", "Full-room upgrades", "Finish work and project coordination"],
  },
];

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

  window.location.href = `mailto:sehandymanllc@gmail.com?subject=${encodeURIComponent(`Service estimate request from ${name || "website visitor"}`)}&body=${encodeURIComponent(body)}`;
}

export default function ServicesPageClient() {
  return (
    <main id="top" data-theme="warm" className="services-page">
      <div className="site-shell">
        <SiteHeader current="services" />

        <section className="services-hero">
          <div className="services-hero-copy">
            <span className="kicker">Seattle &amp; Eastside · Se habla español</span>
            <h1>One call for the work your home needs.</h1>
            <p>
              From the repair that cannot wait to the room you have been meaning to
              improve, you deal with me directly—clear answers, careful work, and an
              honest price. We can talk it through in English or Spanish.
            </p>
            <div className="services-hero-actions">
              <a className="button primary" href="#estimate">
                Get my free estimate <Icon name="arrow" />
              </a>
              <a className="services-phone" href="tel:2066703045">
                <Icon name="phone" />
                <span><small>Talk with Jaime</small>(206) 670-3045</span>
              </a>
            </div>
          </div>
          <div className="services-hero-visual">
            <img src={assetPath("/services/remodeling.webp")} alt="Completed residential remodeling work" />
            <div className="services-hero-note">
              <strong>Since 2011</strong>
              <span>Quality work with respect for your home.</span>
            </div>
          </div>
        </section>

        <nav className="service-jump-nav" aria-label="Jump to a service">
          {services.map((service) => (
            <a href={`#${service.slug}`} key={service.slug}>
              <span>{service.number}</span>{service.title}
            </a>
          ))}
        </nav>

        <section className="services-intro">
          <div>
            <span className="kicker">What I can help with</span>
            <h2>Help for repairs, upgrades, and everything in between.</h2>
          </div>
          <p>
            No job is too small. Bundle a few tasks into one visit, or talk to me about
            a bigger improvement. Either way you get an honest estimate, straight answers,
            and work finished with attention to the details.
          </p>
        </section>

        <section className="service-detail-grid" aria-label="S and E Handyman services">
          {services.map((service) => (
            <article className="service-detail-card" id={service.slug} key={service.slug}>
              <div className="service-detail-image">
                <img src={service.image} alt={`${service.title} service example`} />
                <span>{service.number}</span>
              </div>
              <div className="service-detail-copy">
                <h2>{service.title}</h2>
                <p>{service.intro}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}><Icon name="check" />{item}</li>
                  ))}
                </ul>
                <a href="#estimate">Request this service <Icon name="arrow" /></a>
              </div>
            </article>
          ))}
        </section>

        <section className="service-confidence">
          <div className="service-confidence-heading">
            <span className="kicker">How I work</span>
            <h2>Good work should feel straightforward.</h2>
          </div>
          <div className="service-process">
            <article>
              <span>01</span>
              <h3>Tell me what you need</h3>
              <p>Call, email, or send the form. English or Spanish, both welcome.</p>
            </article>
            <article>
              <span>02</span>
              <h3>I give you a clear price</h3>
              <p>You will know the work, the timing, and the cost before I begin.</p>
            </article>
            <article>
              <span>03</span>
              <h3>I get it done with care</h3>
              <p>Your home stays protected, the details get handled, and I clean up after myself.</p>
            </article>
          </div>
          <div className="service-credentials">
            <div><strong>Licensed</strong><span>Professional service</span></div>
            <div><strong>Bonded &amp; insured</strong><span>Added peace of mind</span></div>
            <div><strong>Seattle &amp; Eastside</strong><span>Locally serving homeowners</span></div>
            <div><strong>5.0 Google rating</strong><span>Recommended by clients</span></div>
          </div>
        </section>

        <section className="service-unsure">
          <div>
            <span className="kicker">Not sure where your project fits?</span>
            <h2>That is completely fine.</h2>
          </div>
          <p>
            Describe what is going on, or just send me your list. I will help you figure out
            the right next step—and I will tell you honestly if it is not something I should take on.
          </p>
          <a className="button primary" href="#estimate">Tell me about it <Icon name="arrow" /></a>
        </section>

        <section className="estimate" id="estimate">
          <div>
            <span className="kicker">Free estimate</span>
            <h2>What can I take<br />off your list?</h2>
            <p>
              Tell me about your project in English or Spanish. I will follow up
              personally to talk through the details and next steps.
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
              <span>Which service do you need?</span>
              <select name="service" defaultValue="">
                <option value="">Select a service or choose “Not sure”</option>
                {services.map((service) => <option key={service.slug}>{service.title}</option>)}
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="wide">
              <span>Tell me about your project</span>
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
