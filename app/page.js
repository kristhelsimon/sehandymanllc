"use client";

import { useEffect, useRef, useState } from "react";

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
    proof: ["Licensed & insured", "Locally owned", "15+ years serving Seattle"],
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
      "Various members of my family and I have used SEHandyman, aka Jaime, for years. He is competent, flexible, and reliable. When there was a construction flaw in my 45 year old condominium, he quickly designed a remedy so my bathroom exhaust fan actually went out of the building, not into the crawl space. He encountered an unexpected problem and fixed it. I have recommended him to many neighbors, who are equally satisfied.",
    name: "Jody McPeak",
    initials: "JM",
  },
  {
    quote:
      "Highly recommend SE Handyman! Jamie’s the best — passionate, thoughtful, and takes pride in doing things right.\n\nMy husband and I met him three years ago during our new home inspection, back when he was the GM at Toll Brothers. He gave us clear, honest advice on everything — framing, tankless water heaters, HVAC settings, attic layout, etc.\n\nOnce I bought a receiver and had no clue how to connect it to the ceiling speakers. Jamie offered to swing by after work, got it all set up in no time, and we ended up hanging out with a couple of beers and some music. Super chill.\n\nWe feel lucky to have met him, and now he’s our go-to for anything around the house.",
    name: "Xun",
    initials: "X",
  },
  {
    quote:
      "Jaime is our long term choice of handyman works at home. He's the best and I'm very happy to have Jaime come over for different sort of work done in our home.",
    name: "Raymond Yin",
    initials: "RY",
  },
  {
    quote:
      "Jaime did a great job fixing our electrical issues in our house, now he is the guy we call anytime we need help. Very friendly, professional, and results.",
    name: "Javi Bushido",
    initials: "JB",
  },
];

const reviewSlides = [reviews.slice(0, 2), reviews.slice(2, 4)];

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
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    facebook: (
      <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v6h4v-6h3l1-4h-4V9c0-.7.3-1 1-1Z" />
    ),
    whatsapp: (
      <>
        <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 21l1.6-4.7a8.5 8.5 0 1 1 15.9-4.6Z" />
        <path d="M8.4 7.6c.3-.3.7-.2.9.1l1 2c.1.3.1.6-.2.8l-.7.6c.7 1.5 1.9 2.7 3.5 3.3l.6-.8c.2-.3.5-.4.8-.2l1.9.9c.4.2.5.6.3.9-.5.9-1.4 1.5-2.4 1.4-4.4-.4-7.8-3.8-8.1-8.1-.1-.4.2-.7.4-.9Z" />
      </>
    ),
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
  const [reviewPage, setReviewPage] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [expandedReview, setExpandedReview] = useState(null);
  const reviewTouchStart = useRef(null);
  const concept = concepts[active];

  useEffect(() => {
    const key = new URLSearchParams(window.location.search).get("concept");
    if (key && concepts[key]) setActive(key);
  }, []);

  useEffect(() => {
    if (reviewsPaused || expandedReview || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setReviewPage((page) => (page + 1) % reviewSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reviewsPaused, expandedReview]);

  function selectConcept(key) {
    setActive(key);
    const url = new URL(window.location.href);
    url.searchParams.set("concept", key);
    window.history.replaceState({}, "", url);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function moveReviews(direction) {
    setExpandedReview(null);
    setReviewPage((page) => (page + direction + reviewSlides.length) % reviewSlides.length);
  }

  function finishReviewSwipe(event) {
    if (reviewTouchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - reviewTouchStart.current;
    if (Math.abs(distance) > 45) moveReviews(distance > 0 ? -1 : 1);
    reviewTouchStart.current = null;
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
          <p>Need handyman help? We’re ready.</p>
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
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
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
            <a
              className="hero-rating"
              href="https://maps.app.goo.gl/pdkY8Qmwz6BaGovr7"
              target="_blank"
              rel="noreferrer"
              aria-label="View S and E Handyman reviews on Google"
            >
              <span className="hero-stars">★★★★★</span>
              <strong>5.0</strong>
              <span><b>Google rating</b><small>Trusted by local homeowners</small></span>
              <Icon name="arrow" />
            </a>
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

        <section className="trust-marquee" aria-label="S and E Handyman credentials and service promises">
          <div className="marquee-track">
            {[0, 1].map((group) => (
              <div className="marquee-group" aria-hidden={group === 1} key={group}>
                <div className="trust-image-badge"><img src="/badges/serving-since-2011.png" alt="Serving since 2011" /></div>
                <div className="trust-image-badge google"><img src="/badges/google-reviews.png" alt="Five-star Google reviews" /></div>
                <div className="trust-image-badge"><img src="/badges/quality-approved.png" alt="Quality control approved" /></div>
                <div className="trust-image-badge"><img src="/badges/warranty.png" alt="Warranty badge" /></div>
                <div className="trust-image-badge"><img src="/badges/licensed-bonded-insured.png" alt="Licensed, bonded and insured" /></div>
                <div className="trust-image-badge seattle"><img src="/badges/seattle-eastside.png" alt="Serving Seattle and the Eastside" /></div>
              </div>
            ))}
          </div>
        </section>

        <section className="trust-strip">
          <p><strong>Trusted in homes across</strong> Seattle &amp; the Eastside</p>
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
              <span className="kicker">Google reviews</span>
              <h2>What Seattle &amp; Eastside<br />homeowners are saying about us.</h2>
            </div>
            <div className="big-rating">
              <strong>5.0</strong><span>★★★★★</span><small>Based on local Google reviews</small>
              <a href="https://maps.app.goo.gl/pdkY8Qmwz6BaGovr7" target="_blank" rel="noreferrer">
                Leave us a review <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div
            className="review-carousel"
            onMouseEnter={() => setReviewsPaused(true)}
            onMouseLeave={() => setReviewsPaused(false)}
            onTouchStart={(event) => { reviewTouchStart.current = event.touches[0].clientX; }}
            onTouchEnd={finishReviewSwipe}
          >
            <div className="review-viewport">
              <div className="review-track" style={{ transform: `translateX(-${reviewPage * 100}%)` }}>
                {reviewSlides.map((slide, slideIndex) => (
                  <div className="review-slide" key={slideIndex} aria-hidden={reviewPage !== slideIndex}>
                    {slide.map((review) => (
                      <article className={expandedReview === review.name ? "expanded" : ""} key={review.name}>
                        <div className="review-card-top">
                          <span className="quote-mark">“</span>
                          <span className="review-card-stars" aria-label="Five out of five stars">★★★★★</span>
                        </div>
                        <p>{review.quote}</p>
                        {review.quote.length > 260 && (
                          <button
                            className="review-more"
                            onClick={() => setExpandedReview(expandedReview === review.name ? null : review.name)}
                            aria-expanded={expandedReview === review.name}
                          >
                            {expandedReview === review.name ? "See less" : "See more"}
                            <span>{expandedReview === review.name ? "−" : "+"}</span>
                          </button>
                        )}
                        <footer>
                          <span>{review.initials}</span>
                          <div><strong>{review.name}</strong><small>Google reviewer</small></div>
                          <i>G</i>
                        </footer>
                      </article>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <button className="review-arrow previous" onClick={() => moveReviews(-1)} aria-label="Show previous reviews">
              <Icon name="arrow" />
            </button>
            <button className="review-arrow next" onClick={() => moveReviews(1)} aria-label="Show next reviews">
              <Icon name="arrow" />
            </button>
            <div className="review-pagination" aria-label="Review pages">
              {reviewSlides.map((_, index) => (
                <button key={index} className={reviewPage === index ? "active" : ""} onClick={() => { setExpandedReview(null); setReviewPage(index); }} aria-label={`Show review page ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-stat">
            <strong>15+</strong>
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
            <small>Mobile</small>
            <a href="tel:2066703045">(206) 670-3045</a>
            <small>Office</small>
            <a href="tel:2064919633">(206) 491-9633</a>
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
