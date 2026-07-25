"use client";

import { useEffect, useRef, useState } from "react";

import { ServiceSelect } from "./components/ServiceSelect";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const assetPath = (path) => `${basePath}${path}`;

const concepts = {
  heritage: {
    number: "01",
    name: "Heritage Refined",
    note: "Familiar, elevated, trustworthy",
    eyebrow: "Seattle & Eastside · Since 2011",
    title: "Your home, handled with care.",
    intro:
      "Professional, safe, and reliable handyman service for repairs, upgrades, and everything in between—delivered with care from the first call to the final walkthrough.",
    primary: "Request a free estimate",
    secondary: "Explore our services",
    proof: ["Licensed, bonded & insured", "Seattle & Eastside", "Serving homeowners since 2011"],
    image: assetPath("/hero-heritage.png"),
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
    image: assetPath("/hero-craft-first.png"),
  },
  warm: {
    number: "03",
    name: "Warm Modern",
    note: "Approachable, calm, residential",
    eyebrow: "Meet Jaime · Your local handyman since 2011",
    title: "Hi, I’m Jaime. Tell me what your home needs.",
    intro:
      "For 15 years I’ve helped Seattle and Eastside homeowners with repairs, upgrades, and remodels. We’ll talk it through in English or Spanish, and you’ll know the price before I pick up a tool.",
    primary: "Get my free estimate",
    secondary: "Call (206) 670-3045",
    proof: ["You work with me, not a crew", "Se habla español", "Free estimates"],
    image: assetPath("/Jaime Handyman Listening.svg"),
  },
  ironclad: {
    number: "04",
    name: "Ironclad",
    note: "Industrial, sharp, high contrast",
    eyebrow: "Seattle handyman work without shortcuts",
    title: "Built right. Finished sharp.",
    intro:
      "Dependable repairs, installations, and remodels from a licensed local team that values straight answers and solid results.",
    primary: "Get your free estimate",
    secondary: "View our services",
    proof: ["Licensed, bonded & insured", "Clear, honest estimates", "Serving since 2011"],
    image: assetPath("/hero-craft-first.png"),
  },
  field: {
    number: "05",
    name: "Field Built",
    note: "Structured, strong, contractor-led",
    eyebrow: "Reliable service across Seattle & Eastside",
    title: "Reliable work. Solid results.",
    intro:
      "From the first repair to the final walkthrough, we bring skilled workmanship, clear communication, and respect for your home.",
    primary: "Request a free quote",
    secondary: "See what we handle",
    proof: ["Six service specialties", "Monday–Saturday · 7am–7pm", "No job too small"],
    image: assetPath("/hero-heritage.png"),
  },
};

const services = [
  {
    icon: "ruler",
    title: "Finish Carpentry",
    slug: "finish-carpentry",
    text: "Trim, doors, shelving, built-ins, and detailed woodwork made to fit your home.",
    tag: "Trim → built-ins",
    image: assetPath("/services/finish-carpentry.webp"),
  },
  {
    icon: "bolt",
    title: "Electrical & Lighting",
    slug: "electrical-lighting",
    text: "Lighting, fixtures, outlets, switches, troubleshooting, and careful electrical upgrades.",
    tag: "Fixtures → upgrades",
    image: assetPath("/services/electrical-lighting.webp"),
  },
  {
    icon: "install",
    title: "Installations",
    slug: "installations",
    text: "Appliances, fixtures, hardware, shelving, and other household items installed correctly.",
    tag: "Appliances → hardware",
    image: assetPath("/services/installations.webp"),
  },
  {
    icon: "tool",
    title: "Maintenance & Repairs",
    slug: "maintenance-repairs",
    text: "Everyday fixes, home maintenance, punch lists, and urgent repairs handled efficiently.",
    tag: "Quick fixes → upkeep",
    image: assetPath("/services/maintenance-repairs.webp"),
  },
  {
    icon: "wall",
    title: "Drywall & Painting",
    slug: "drywall-painting",
    text: "Drywall patches, texture matching, interior painting, and seamless wall repairs.",
    tag: "Patch → refresh",
    image: assetPath("/services/drywall-painting.webp"),
    imagePosition: "35% center",
  },
  {
    icon: "home",
    title: "Remodeling",
    slug: "remodeling",
    text: "Kitchen, bathroom, and full-room improvements managed with care from start to finish.",
    tag: "Kitchen → bathroom",
    image: assetPath("/services/remodeling.webp"),
  },
];

const reviews = [
  {
    quote:
      "Various members of my family and I have used SEHandyman, aka Jaime, for years. He is competent, flexible, and reliable. When there was a construction flaw in my 45 year old condominium, he quickly designed a remedy so my bathroom exhaust fan actually went out of the building, not into the crawl space. He encountered an unexpected problem and fixed it. I have recommended him to many neighbors, who are equally satisfied.",
    name: "Jody McPeak",
    initials: "JM",
    avatar: assetPath("/reviewers/jody-mcpeak.png"),
  },
  {
    quote:
      "Highly recommend SE Handyman! Jamie’s the best — passionate, thoughtful, and takes pride in doing things right.\n\nMy husband and I met him three years ago during our new home inspection, back when he was the GM at Toll Brothers. He gave us clear, honest advice on everything — framing, tankless water heaters, HVAC settings, attic layout, etc.\n\nOnce I bought a receiver and had no clue how to connect it to the ceiling speakers. Jamie offered to swing by after work, got it all set up in no time, and we ended up hanging out with a couple of beers and some music. Super chill.\n\nWe feel lucky to have met him, and now he’s our go-to for anything around the house.",
    name: "Xun",
    initials: "X",
    avatar: assetPath("/reviewers/xun.png"),
  },
  {
    quote:
      "Jaime is our long term choice of handyman works at home. He's the best and I'm very happy to have Jaime come over for different sort of work done in our home.",
    name: "Raymond Yin",
    initials: "RY",
    avatar: assetPath("/reviewers/raymond-yin.png"),
  },
  {
    quote:
      "Jaime did a great job fixing our electrical issues in our house, now he is the guy we call anytime we need help. Very friendly, professional, and results.",
    name: "Javi Bushido",
    initials: "JB",
    avatar: assetPath("/reviewers/javi-bushido.png"),
  },
];

const reviewSlides = [reviews.slice(0, 2), reviews.slice(2, 4)];

const faqs = [
  [
    "What types of projects do you handle?",
    "Electrical work and lighting, appliance installations, drywall and painting, doors and windows, carpentry and finish work, flooring, and kitchen or bathroom remodeling—from a minor fix to a full upgrade. If you are not sure whether your project fits, just ask me.",
  ],
  [
    "How much does handyman service cost?",
    "It depends on the work involved. I look at the project first and give you a clear estimate before anything begins, so there are no surprises when you get the invoice.",
  ],
  [
    "Are you licensed, bonded, and insured?",
    "Yes. S & E Handyman is fully licensed, bonded, and insured. I take safety and professionalism seriously so you can feel confident about work being done in your home.",
  ],
  [
    "How do I request a quote or schedule a job?",
    "Call me at (206) 670-3045 or email sehandymanllc@gmail.com and tell me what you need. We will talk through the project, I will give you a free estimate, and we will find a time that works for you.",
  ],
  [
    "Do you offer emergency or same-day service?",
    "I do my best to fit in urgent repairs and prioritize emergencies whenever I can. It depends on the job and my current schedule; regular hours are Monday through Saturday, 7am to 7pm.",
  ],
  [
    "What areas do you serve?",
    "I serve homeowners throughout Seattle and the Eastside, including the surrounding neighborhoods. Not sure if you are in range? Give me a call and I will let you know.",
  ],
  [
    "Can I combine multiple tasks in one visit?",
    "Absolutely, and it is the smartest way to use my time. Bundling small repairs and maintenance into one visit gets more of your list done for less. Send me the whole list and we will work through it together.",
  ],
  [
    "Can we discuss my project in Spanish?",
    "Sí, hablo español. We can go over estimates, project details, and any questions in English or Spanish—whichever feels more comfortable for you.",
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
    install: (
      <>
        <path d="M12 3v12M8 7l4-4 4 4" />
        <path d="M5 14v6h14v-6" />
      </>
    ),
    tool: (
      <path d="M14.7 6.3a4 4 0 0 1-5 5L4 17l3 3 5.7-5.7a4 4 0 0 1 5-5l-3 3-3-3 3-3Z" />
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
  const [menu, setMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [reviewPage, setReviewPage] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [expandedReview, setExpandedReview] = useState(null);
  const [badgeDragging, setBadgeDragging] = useState(false);
  const reviewTouchStart = useRef(null);
  const badgeTrack = useRef(null);
  const badgeDrag = useRef({ held: false, paused: false, offset: 0, startX: 0, startLeft: 0 });
  const concept = concepts.warm;

  // Auto-advance the badge strip. It is a real scroll container so the same
  // pixels can be dragged or swiped by hand; this just nudges scrollLeft along
  // and wraps at the halfway point, where the duplicated group begins.
  useEffect(() => {
    const track = badgeTrack.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const drag = badgeDrag.current;
    drag.offset = track.scrollLeft;
    let frame;
    let previous;
    const advance = (now) => {
      const elapsed = previous === undefined ? 0 : Math.min(now - previous, 100);
      previous = now;
      if (!drag.held && !drag.paused) {
        const half = track.scrollWidth / 2;
        // Advance an offset we own rather than reading scrollLeft back each
        // frame: mobile browsers round scrollLeft to whole pixels, which throws
        // away the sub-pixel step and stalls the strip completely.
        drag.offset += elapsed * 0.05;
        if (half > 0 && drag.offset >= half) drag.offset -= half;
        track.scrollLeft = drag.offset;
      }
      frame = window.requestAnimationFrame(advance);
    };

    frame = window.requestAnimationFrame(advance);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  // Wraps into the middle of the duplicated strip. The +1/-1 keeps the result
  // strictly inside the range so writing it back cannot re-trigger a wrap and
  // bounce between the two ends forever.
  function wrapBadgeScroll(value) {
    const track = badgeTrack.current;
    const half = track.scrollWidth / 2;
    if (half <= 0) return value;
    if (value >= half) return value - half + 1;
    if (value <= 0) return value + half - 1;
    return value;
  }

  function startBadgeDrag(event) {
    if (event.pointerType === "touch") return; // native touch scrolling handles this
    const track = badgeTrack.current;
    badgeDrag.current.held = true;
    badgeDrag.current.startX = event.clientX;
    badgeDrag.current.startLeft = track.scrollLeft;
    track.setPointerCapture(event.pointerId);
    setBadgeDragging(true);
  }

  function moveBadgeDrag(event) {
    if (!badgeDrag.current.held) return;
    event.preventDefault();
    const track = badgeTrack.current;
    const travelled = event.clientX - badgeDrag.current.startX;
    track.scrollLeft = wrapBadgeScroll(badgeDrag.current.startLeft - travelled);
  }

  function endBadgeDrag() {
    if (!badgeDrag.current.held) return;
    badgeDrag.current.held = false;
    badgeDrag.current.offset = badgeTrack.current.scrollLeft;
    setBadgeDragging(false);
  }

  useEffect(() => {
    if (reviewsPaused || expandedReview || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      setReviewPage((page) => (page + 1) % reviewSlides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [reviewsPaused, expandedReview]);

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

  function submitQuote(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const contact = String(form.get("contact") || "").trim();
    const service = String(form.get("service") || "").trim();
    const message = String(form.get("message") || "").trim();
    const body = [
      `Name: ${name || "Not provided"}`,
      phone ? `Phone: ${phone}` : null,
      email ? `Email: ${email}` : null,
      contact ? `Preferred contact: ${contact}` : null,
      service ? `Service: ${service}` : null,
      "",
      "Project details:",
      message || "Not provided",
    ].filter((line) => line !== null).join("\n");

    window.location.href = `mailto:sehandymanllc@gmail.com?subject=${encodeURIComponent(`Free quote request from ${name || "website visitor"}`)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main id="top" data-theme="warm">
      <div className="site-shell">
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
              <span><small>Email me</small>sehandymanllc@gmail.com</span>
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
            <a className="active" href={assetPath("/")} aria-current="page" onClick={() => setMenu(false)}>Home</a>
            <a href={assetPath("/services/")} onClick={() => setMenu(false)}>Services</a>
            <a href={assetPath("/our-work/")} onClick={() => setMenu(false)}>Our work</a>
            <a href="#reviews" onClick={() => setMenu(false)}>Reviews</a>
            <a href="#about" onClick={() => setMenu(false)}>About Me</a>
          </nav>
          <a className="header-cta" href="#quote">
            <span className="cta-lead">Get your&nbsp;</span><strong>FREE Quote</strong>
          </a>
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
          <img src={concept.image} alt="Jaime speaking with a homeowner about her project" />
          <div className="hero-shade" />
          <div className="hero-copy">
            <div className="eyebrow">
              <span />
              {concept.eyebrow}
            </div>
            <h1>{concept.title}</h1>
            <p>{concept.intro}</p>
            <div className="hero-benefits" aria-label="Why homeowners choose S and E Handyman">
              <div className="hero-benefit">
                <img src={assetPath("/trust-icons/15-years-expertise.webp")} alt="" />
                <span><strong>15 years</strong>of expertise</span>
              </div>
              <div className="hero-benefit">
                <img src={assetPath("/trust-icons/24-hour-estimates.webp")} alt="" />
                <span><strong>24-hour</strong>estimates</span>
              </div>
              <div className="hero-benefit">
                <img src={assetPath("/trust-icons/superior-craftsmanship.webp")} alt="" />
                <span><strong>Superior</strong>craftsmanship</span>
              </div>
            </div>
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
          </div>
          <div className="hero-proof">
            {concept.proof.map((item) => (
              <span key={item}>
                <i><Icon name="check" /></i>{item}
              </span>
            ))}
          </div>
        </section>

        <section className="quick-quote" id="quote" aria-labelledby="quick-quote-title">
          <h2 id="quick-quote-title">Get your <strong>FREE Quote</strong></h2>
          <form onSubmit={submitQuote}>
            <label>
              <span className="sr-only">Name</span>
              <input name="name" type="text" placeholder="Name" autoComplete="name" required />
            </label>
            <label>
              <span className="sr-only">Phone</span>
              <input name="phone" type="tel" placeholder="Phone" autoComplete="tel" required />
            </label>
            <label>
              <span className="sr-only">Email</span>
              <input name="email" type="email" placeholder="Email" autoComplete="email" required />
            </label>
            <label>
              <span className="sr-only">How can I help you?</span>
              <textarea name="message" rows={1} placeholder="How can I help you?" required />
            </label>
            <button type="submit">Submit <Icon name="arrow" /></button>
          </form>
        </section>

        <section className="trust-marquee" aria-label="S and E Handyman credentials and service promises">
          <div
            className={`marquee-track${badgeDragging ? " dragging" : ""}`}
            ref={badgeTrack}
            tabIndex={0}
            role="group"
            aria-label="Credentials — scroll or drag to see more"
            onPointerDown={startBadgeDrag}
            onPointerMove={moveBadgeDrag}
            onPointerUp={endBadgeDrag}
            onPointerCancel={endBadgeDrag}
            onPointerEnter={() => { badgeDrag.current.paused = true; }}
            onPointerLeave={() => { badgeDrag.current.paused = false; }}
            onDragStart={(event) => event.preventDefault()}
            onScroll={(event) => {
              const drag = badgeDrag.current;
              if (drag.held) return;
              const track = event.currentTarget;
              const half = track.scrollWidth / 2;
              if (half <= 0) return;
              // Keeps wheel, keyboard, and touch-fling scrolling endless in both
              // directions, since a scroll container clamps hard at 0.
              if (track.scrollLeft >= half) track.scrollLeft = track.scrollLeft - half + 1;
              else if (track.scrollLeft <= 0) track.scrollLeft = half - 1;
              // Hand control back to the animation from wherever the user left it.
              if (Math.abs(track.scrollLeft - drag.offset) > 2) drag.offset = track.scrollLeft;
            }}
          >
            {[0, 1].map((group) => (
              <div className="marquee-group" aria-hidden={group === 1} key={group}>
                <div className="trust-image-badge"><img src={assetPath("/badges/serving-since-2011.png")} alt="Serving since 2011" /></div>
                <div className="trust-image-badge google"><img src={assetPath("/badges/google-reviews.png")} alt="Five-star Google reviews" /></div>
                <div className="trust-image-badge"><img src={assetPath("/badges/quality-approved.png")} alt="Quality control approved" /></div>
                <div className="trust-image-badge"><img src={assetPath("/badges/warranty.png")} alt="Warranty badge" /></div>
                <div className="trust-image-badge"><img src={assetPath("/badges/licensed-bonded-insured.png")} alt="Licensed, bonded and insured" /></div>
                <div className="trust-image-badge seattle"><img src={assetPath("/badges/seattle-eastside.png")} alt="Serving Seattle and the Eastside" /></div>
              </div>
            ))}
          </div>
        </section>

        <section className="trust-strip">
          <p><strong>Se habla español</strong> Serving Seattle &amp; the Eastside since 2011</p>
          <p className="phone-link">
            <Icon name="phone" />
            <span>Prefer to talk? <a href="tel:2066703045">(206) 670-3045</a></span>
          </p>
        </section>

        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <span className="kicker">What I can help with</span>
              <h2>One call for almost<br />anything your <span className="mobile-break"><br /></span>home needs.</h2>
            </div>
            <p>
              From a single repair to a full room remodel, I bring the same care to
              every job—clear pricing, clean work, and real respect for your home.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <img
                  className="service-background"
                  src={service.image}
                  alt=""
                  aria-hidden="true"
                  style={{ objectPosition: service.imagePosition || "center" }}
                />
                <div className="service-top">
                  <i><Icon name={service.icon} /></i>
                  <span>0{index + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href={assetPath(`/services/#${service.slug}`)}>
                  {service.tag} <Icon name="arrow" />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="project-story" id="work">
          <div className="project-image">
            <img
              src={assetPath("/services/prepped-job-site.webp")}
              alt="A living room prepped before work begins—furniture wrapped in plastic, drop cloths over the floor, and painter's tape along the trim"
              width="1536"
              height="1024"
            />
            <span>Your home gets covered before the work starts</span>
          </div>
          <div className="project-copy">
            <span className="kicker">How I work</span>
            <h2>Good work starts before the work does.</h2>
            <p>
              It begins with a real conversation about what you need—then with drop
              cloths down, furniture covered, and edges taped before a single tool
              comes out. You’ll know the price up front, and you’ll get your room
              back the way you’d want it.
            </p>
            <ul>
              <li><Icon name="check" /><span><strong>Respect for your space</strong>Your floors and furniture are protected before I begin.</span></li>
              <li><Icon name="check" /><span><strong>Clear, honest estimates</strong>You’ll know the scope and the cost before I start.</span></li>
              <li><Icon name="check" /><span><strong>Details that hold up</strong>Quality work, even where you don’t see it.</span></li>
            </ul>
            <a className="text-link" href="#about">Why homeowners keep calling me <Icon name="arrow" /></a>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="section-heading review-heading">
            <div>
              <span className="kicker">Google reviews</span>
              <h2>What Seattle &amp; Eastside<br />homeowners say about my work.</h2>
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
                          <span className="review-avatar">
                            {review.avatar ? (
                              <img src={review.avatar} alt={`${review.name} profile`} />
                            ) : (
                              review.initials
                            )}
                          </span>
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
            <span>years helping local homeowners</span>
          </div>
          <div className="about-copy">
            <span className="kicker">Who you’ll be working with</span>
            <h2>I treat your home<br />like my own.</h2>
            <p>
              I work directly with Seattle and Eastside homeowners—no call center, no
              rotating crew. From a small repair to a full remodel, I listen first,
              explain the plan in English or Spanish, and finish the job with the care
              I’d want in my own house. And no job is too small to ask about.
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
            <p>
              Still deciding? Call <a href="tel:2066703045">(206) 670-3045</a> or
              email <a href="mailto:sehandymanllc@gmail.com">sehandymanllc@gmail.com</a>.
              I’m always happy to talk through a project, even if you’re just weighing options.
            </p>
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
            <h2>What can I take<br />off your list?</h2>
            <p>Tell me about your project in English or Spanish. I’ll follow up personally to talk through the details, the timing, and what it will cost.</p>
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
              <span>What do you need help with?</span>
              <textarea name="message" placeholder="A quick description of your project..." required />
            </label>
            <button className="button primary" type="submit">
              Request my free estimate <Icon name="arrow" />
            </button>
            <small>I usually reply within one business day.</small>
          </form>
        </section>

        <footer className="site-footer">
          <Brand />
          <div className="footer-links">
            <a href={assetPath("/")}>Home</a>
            <a href={assetPath("/services/")}>Services</a>
            <a href={assetPath("/our-work/")}>Our work</a>
            <a href="#reviews">Reviews</a>
            <a href="#about">About Me</a>
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
            <span>Licensed · Bonded · Insured · English &amp; Spanish</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
