"use client";

import { useEffect, useState } from "react";

const concepts = {
  heritage: {
    number: "01",
    name: "Heritage Refined",
    note: "Familiar, elevated, trustworthy",
    eyebrow: "Seattle & Eastside · Since 2011",
    title: "Your home, handled with care.",
    intro:
      "Trusted craftsmanship for repairs, upgrades, and everything in between. One reliable team, from the first call to the final walkthrough.",
    primary: "Request a free estimate",
    secondary: "Explore our services",
    proof: ["Licensed & insured", "Locally owned", "14+ years serving Seattle"],
    image: "/hero-heritage.png",
  },
  craft: {
    number: "02",
    name: "Craft First",
    note: "Bold, direct, premium",
    eyebrow: "Good work. Done right.",
    title: "Built to last. Fixed to stay fixed.",
    intro:
      "Electrical, drywall, carpentry, and remodels—delivered by a skilled local crew that respects your home and your time.",
    primary: "Start your project",
    secondary: "See what we do",
    proof: ["Clear estimates", "Skilled workmanship", "No project runaround"],
    image: "/hero-craft-first.png",
  },
  warm: {
    number: "03",
    name: "Warm Modern",
    note: "Approachable, calm, residential",
    eyebrow: "Home projects made easier",
    title: "A better home starts with the right help.",
    intro:
      "From the repair you keep putting off to the room you’re ready to reimagine, we make home projects feel refreshingly straightforward.",
    primary: "Tell us about your project",
    secondary: "View recent work",
    proof: ["Friendly local team", "Thoughtful project care", "Quality without shortcuts"],
    image: "/hero-warm-modern.png",
  },
};

const services = [
  {
    icon: "bolt",
    title: "Electrical",
    text: "Fixtures, outlets, switches, troubleshooting, and careful installations.",
    tag: "Small fixes → upgrades",
  },
  {
    icon: "wall",
    title: "Drywall & Paint",
    text: "Patches, texture matching, fresh paint, and seamless wall repairs.",
    tag: "Repair → refresh",
  },
  {
    icon: "ruler",
    title: "Carpentry",
    text: "Trim, doors, shelving, built-ins, and detail work made to fit.",
    tag: "Finish → custom",
  },
  {
    icon: "home",
    title: "Remodeling",
    text: "Smart updates and full-room transformations, managed start to finish.",
    tag: "Kitchen → whole room",
  },
];

const reviews = [
  {
    quote:
      "S & E was responsive, professional, and very detail-oriented. I’ll definitely hire them again.",
    name: "Olivia A.",
    place: "Seattle",
  },
  {
    quote:
      "Everything was done with care and skill. Top-notch service all the way.",
    name: "Daniel M.",
    place: "Bellevue",
  },
  {
    quote:
      "They were super helpful during our move-out maintenance. The house looked perfect.",
    name: "Matthew M.",
    place: "Kirkland",
  },
];

const faqs = [
  [
    "What types of projects do you handle?",
    "We handle electrical work, drywall and painting, doors and windows, carpentry, finish work, and remodels—from focused repairs to larger room updates.",
  ],
  [
    "How much does handyman service cost?",
    "Pricing depends on the work involved. We provide a clear estimate before work begins so you understand the scope and cost.",
  ],
  [
    "What areas do you serve?",
    "We serve Seattle and communities across the Eastside, including Bellevue, Kirkland, Redmond, and nearby areas.",
  ],
  [
    "Are you licensed and insured?",
    "Yes. S & E Handyman is licensed and insured, with professional service you can feel confident bringing into your home.",
  ],
];

function Icon({ name }) {
  const paths = {
    bolt: <path d="M13 2 5 14h7l-1 8 8-12h-7l1-8Z" />,
    wall: (
      <>
        <path d="M3 5h8v6H3zM13 5h8v6h-8zM3 13h5v6H3zM10 13h11v6H10z" />
      </>
    ),
    ruler: (
      <>
        <path d="m4 16 12-12 4 4L8 20H4v-4Z" />
        <path d="m13 7 4 4M10 10l2 2M7 13l4 4" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="S and E Handyman home">
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

export default function Home() {
  const [active, setActive] = useState("heritage");
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const concept = concepts[active];

  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("concept");
    if (key && concepts[key]) setActive(key);
  }, []);

  function selectConcept(key) {
    setActive(key);
    const url = new URL(window.location.href);
    url.searchParams.set("concept", key);
    window.history.replaceState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main id="top" data-theme={active}>
      <aside className="concept-bar" aria-label="Design concepts">
        <div className="concept-label">
          <span>Website directions</span>
          <strong>Choose a concept</strong>
        </div>
        <div className="concept-tabs">
          {Object.entries(concepts).map(([key, item]) => (
            <button
              key={key}
              className={active === key ? "active" : ""}
              onClick={() => selectConcept(key)}
            >
              <span>{item.number}</span>
              <span>
                <strong>{item.name}</strong>
                <small>{item.note}</small>
              </span>
            </button>
          ))}
        </div>
      </aside>

      <div className="site-shell">
        <div className="utility">
          <p>Reliable &amp; fast service since 2011</p>
          <div>
            <span>Mon–Sat · 7am–7pm</span>
            <a href="tel:2066703045">(206) 670-3045</a>
          </div>
        </div>

        <header>
          <Brand />
          <nav className={menu ? "open" : ""} aria-label="Main navigation">
            <a href="#services" onClick={() => setMenu(false)}>Services</a>
            <a href="#work" onClick={() => setMenu(false)}>Our work</a>
            <a href="#reviews" onClick={() => setMenu(false)}>Reviews</a>
            <a href="#about" onClick={() => setMenu(false)}>About</a>
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
          </button>
        </header>

        <section className="hero">
          <img src={concept.image} alt="Quality residential handyman craftsmanship" />
          <div className="hero-shade" />
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              {concept.eyebrow}
            </div>
            <h1>{concept.title}</h1>
            <p>{concept.intro}</p>
            <div className="hero-actions">
              <a className="button primary" href="#estimate">
                {concept.primary} <Icon name="arrow" />
              </a>
              <a className="button secondary" href="#services">
                {concept.secondary}
              </a>
            </div>
          </div>
          <div className="hero-proof">
            {concept.proof.map((item) => (
              <span key={item}>
                <i><Icon name="check" /></i>{item}
              </span>
            ))}
          </div>
          <div className="hero-index">{concept.number} / 03</div>
        </section>

        <section className="trust-strip">
          <p><strong>Trusted in homes across</strong> Seattle &amp; the Eastside</p>
          <div className="rating">
            <span>★★★★★</span>
            <strong>5.0</strong>
            <small>Google rating</small>
          </div>
          <p className="phone-link">
            <Icon name="phone" />
            <span>Prefer to talk? <a href="tel:2066703045">(206) 670-3045</a></span>
          </p>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <span className="kicker">What we do</span>
              <h2>One trusted team.<br />A home of possibilities.</h2>
            </div>
            <p>
              Skip the contractor juggling. We bring the right skill and a
              thoughtful approach to projects throughout your home.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-top">
                  <i><Icon name={service.icon} /></i>
                  <span>0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#estimate">{service.tag} <Icon name="arrow" /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="project-story" id="work">
          <div className="project-image">
            <img src="/hero-warm-modern.png" alt="Handyman completing custom kitchen cabinetry" />
            <span>Craftsmanship you can see</span>
          </div>
          <div className="project-copy">
            <span className="kicker">The S &amp; E standard</span>
            <h2>Good work starts with listening.</h2>
            <p>
              Your project begins with a clear conversation—what you need,
              what matters, and what done-right looks like to you. Then we
              show up prepared, protect your home, and keep you informed.
            </p>
            <ul>
              <li><Icon name="check" /><span><strong>Straightforward scope</strong>No vague plans or surprise add-ons.</span></li>
              <li><Icon name="check" /><span><strong>Respect for your space</strong>Careful prep and a clean finish.</span></li>
              <li><Icon name="check" /><span><strong>Details that hold up</strong>Quality work, even where you don’t see it.</span></li>
            </ul>
            <a className="text-link" href="#about">Why homeowners choose us <Icon name="arrow" /></a>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="section-heading review-heading">
            <div>
              <span className="kicker">Neighbor recommended</span>
              <h2>Work people feel<br />good recommending.</h2>
            </div>
            <div className="big-rating">
              <strong>5.0</strong><span>★★★★★</span><small>Based on local Google reviews</small>
            </div>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article key={review.name}>
                <span className="quote-mark">“</span>
                <p>{review.quote}</p>
                <footer>
                  <span>{review.name.charAt(0)}</span>
                  <div><strong>{review.name}</strong><small>{review.place} homeowner</small></div>
                  <i>G</i>
                </footer>
              </article>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-stat">
            <strong>14+</strong>
            <span>years of dependable local service</span>
          </div>
          <div className="about-copy">
            <span className="kicker">Local since 2011</span>
            <h2>The capable neighbor<br />you’re glad you called.</h2>
            <p>
              S &amp; E Handyman helps Seattle and Eastside homeowners take
              care of repairs, finish the list, and bring bigger ideas to
              life—with reliable communication and pride in every detail.
            </p>
          </div>
          <div className="areas">
            <small>Serving</small>
            <strong>Seattle · Bellevue · Kirkland<br />Redmond · Eastside</strong>
          </div>
        </section>

        <section className="faq section">
          <div className="faq-intro">
            <span className="kicker">Good to know</span>
            <h2>A few common questions.</h2>
            <p>Still deciding? We’re happy to talk through your project.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <article className={openFaq === index ? "open" : ""} key={question}>
                <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                  <span>{question}</span><i>{openFaq === index ? "−" : "+"}</i>
                </button>
                <div><p>{answer}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="estimate" id="estimate">
          <div>
            <span className="kicker">Let’s get it done</span>
            <h2>What can we take<br />off your list?</h2>
            <p>Tell us a little about the project. We’ll follow up to discuss the details and next steps.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label>
              <span>Your name</span>
              <input type="text" placeholder="Jane Smith" />
            </label>
            <label>
              <span>Phone or email</span>
              <input type="text" placeholder="How should we reach you?" />
            </label>
            <label className="wide">
              <span>What do you need help with?</span>
              <textarea placeholder="A quick description of your project..." />
            </label>
            <button className="button primary" type="submit">
              Request my estimate <Icon name="arrow" />
            </button>
            <small>Usually responds within one business day.</small>
          </form>
        </section>

        <footer className="site-footer">
          <Brand />
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#work">Our work</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-contact">
            <a href="tel:2066703045">(206) 670-3045</a>
            <span>sehandymanllc@gmail.com</span>
          </div>
          <div className="footer-bottom">
            <span>© 2026 S &amp; E Handyman LLC</span>
            <span>Licensed · Bonded · Insured</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
