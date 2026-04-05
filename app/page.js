'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* ─── Data ────────────────────────────────────────────── */
const slides = [
  {
    img: '/images/hero1.png',
    badge: 'New Launch',
    title: 'A Home Reserved\nFor The Fortunate',
    sub:  "Luxury living spaces designed with passion, precision, and purpose in Valsad's finest locations.",
    cta:  { label: 'Explore Projects', href: '/projects' },
  },
  {
    img: '/images/hero2.png',
    badge: 'Premium Villas',
    title: 'Where Architecture\nMeets Nature',
    sub:  'Row villas crafted with artisan details, panoramic green views, and world-class amenities.',
    cta:  { label: 'View Villas', href: '/projects/kedar-heights' },
  },
  {
    img: '/images/hero3.png',
    badge: 'Gated Township',
    title: 'Building Communities,\nNot Just Homes',
    sub:  'A fully integrated township experience — where every detail is thoughtfully curated for you.',
    cta:  { label: 'Discover More', href: '/projects/kedar-greens' },
  },
];

const values = [
  { icon: '🏛️', title: 'Integrity In Every Brick', desc: 'Transparent dealings and honest construction practices form the bedrock of everything we build.' },
  { icon: '🌿', title: 'Sustainable Living',        desc: 'Eco-conscious materials, rainwater harvesting and green landscaping in each project.' },
  { icon: '✨', title: 'Premium Quality',            desc: 'We never compromise on material quality — every tile, fitting and finish reflects excellence.' },
  { icon: '🤝', title: 'Customer First',             desc: 'From site visit to possession, we ensure a smooth and transparent journey for every buyer.' },
];

const allProjects = [
  { name: 'Kedar Heights',    slug: 'kedar-heights',   type: '3 & 4 BHK Villas',       img: '/images/hero2.png' },
  { name: 'Kedar Greens',     slug: 'kedar-greens',    type: 'Premium Apartments',      img: '/images/hero1.png' },
  { name: 'Kedar Residency',  slug: 'kedar-residency', type: '2 & 3 BHK Residences',   img: '/images/hero3.png' },
];

const faqs = [
  { q: 'Where are your projects located?',               a: 'All our projects are located in Parnera, Pardi, Valsad — a fast-growing residential hub in South Gujarat with excellent connectivity.' },
  { q: 'Do you offer home loan assistance?',             a: 'Yes, we work with leading banks including SBI, HDFC, ICICI and axis bank to ensure smooth home loan processing for our buyers.' },
  { q: 'What is the possession timeline?',               a: 'We deliver homes on schedule. Typical possession timelines are clearly communicated at the time of booking, and we have a strong track record of on-time delivery.' },
  { q: 'Are your projects RERA registered?',             a: 'Absolutely. All our projects are registered under Gujarat RERA ensuring full legal compliance and transparency.' },
  { q: "Can I schedule a site visit?",                   a: "Yes! Simply call us at +91 9600000024 or fill our Inquire Now form. We'll arrange a guided site visit at your convenience." },
];

/* ─── Hero Carousel ───────────────────────────────────── */
function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey]  = useState(0);

  const goTo = useCallback((idx) => {
    setCurrent(idx);
    setAnimKey((k) => k + 1);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => goTo((current + 1) % slides.length), 5000);
    return () => clearTimeout(t);
  }, [current, goTo]);

  const slide = slides[current];

  return (
    <div className="hero-carousel">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero-slide${i === current ? ' active' : ''}`}
          style={{ backgroundImage: `url(${s.img})` }}
        />
      ))}
      <div className="hero-overlay" />

      <div className="hero-content">
        <div key={animKey} style={{ animation: 'fadeInUp 0.9s ease forwards' }}>
          <div className="hero-badge">{slide.badge}</div>
          <h1 className="hero-title" style={{ whiteSpace: 'pre-line' }}>{slide.title}</h1>
          <p className="hero-subtitle">{slide.sub}</p>
          <div>
            <Link href={slide.cta.href} className="btn-gold">{slide.cta.label}</Link>
            <Link href="/inquire" className="btn-outline">Inquire Now</Link>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button className="carousel-arrow prev" onClick={() => goTo((current - 1 + slides.length) % slides.length)}>‹</button>
      <button className="carousel-arrow next" onClick={() => goTo((current + 1) % slides.length)}>›</button>

      {/* Dots */}
      <div className="carousel-controls">
        {slides.map((_, i) => (
          <button key={i} className={`carousel-dot${i === current ? ' active' : ''}`} onClick={() => goTo(i)} />
        ))}
      </div>
    </div>
  );
}

/* ─── FAQ Item ────────────────────────────────────────── */
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-question" onClick={() => setOpen(!open)} role="button" tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setOpen(!open)}>
        {q}
        <span className="icon">+</span>
      </div>
      <div className="faq-answer">{a}</div>
    </div>
  );
}

/* ─── Scroll to Top ───────────────────────────────────── */
function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button className={`scroll-top${show ? ' visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
  );
}

/* ─── Page ────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <HeroCarousel />

      {/* Values strip */}
      <section>
        <div className="values-grid">
          {values.map((v, i) => (
            <div key={i} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src="/images/hero1.png" alt="Kedar Developers project" className="about-img-main" />
              <div className="about-img-badge">
                <div className="num">10+</div>
                <div className="lbl">Years of Trust</div>
              </div>
            </div>
            <div className="about-text">
              <div className="section-label">About Kedar Developers</div>
              <h2 className="section-title">We Bring Dream Homes to Reality</h2>
              <div className="section-divider" />
              <p>
                Kedar Developers is a trusted name in South Gujarat's real estate landscape. Based in Parnera, Pardi, Valsad,
                we are committed to delivering homes that combine thoughtful design with lasting quality — at prices that represent true value.
              </p>
              <p>
                Every project we undertake is backed by meticulous planning, transparent processes and a genuine passion for crafting spaces where families thrive.
                We go beyond construction — we create communities.
              </p>
              <p>
                With over a decade of experience and hundreds of satisfied families, Kedar Developers continues to set the benchmark for premium residential development in South Gujarat.
              </p>
              <Link href="/about" className="btn-gold" style={{ marginTop: '8px' }}>Learn More About Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">🏗️</div>
            <div className="stat-num">10+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">👨‍👩‍👧‍👦</div>
            <div className="stat-num">400+</div>
            <div className="stat-label">Happy Families</div>
          </div>
          <div className="stat-item">
            <div className="stat-icon">🏢</div>
            <div className="stat-num">20+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <section className="section-pad">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">All Projects</h2>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="projects-grid">
            {allProjects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="project-card" style={{ textDecoration: 'none' }}>
                <img src={p.img} alt={p.name} />
                <div className="project-card-overlay">
                  <div className="project-card-tag">{p.type}</div>
                  <div className="project-card-name">{p.name}</div>
                  <span className="project-card-link">View Project →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/projects" className="btn-gold">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <div className="section-label">FAQs</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="section-divider" />
            <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8' }}>
              We believe in complete transparency. Find answers to common questions about our projects, processes and services below.
            </p>
            <Link href="/contact" className="btn-gold" style={{ marginTop: '28px', display: 'inline-block' }}>Contact Us</Link>
          </div>
          <div>
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--gold-dark) 0%, var(--gold) 100%)',
        padding: '70px 40px', textAlign: 'center', color: 'white'
      }}>
        <div className="section-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Ready to Move In?</div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '38px', margin: '12px 0 18px' }}>
          Find Your Dream Home Today
        </h2>
        <p style={{ fontSize: '16px', maxWidth: '560px', margin: '0 auto 34px', lineHeight: '1.8', color: 'rgba(255,255,255,0.85)' }}>
          Schedule a free site visit or speak to our team. We'll help you find the perfect home in Valsad.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:9600000024" style={{
            background: 'white', color: 'var(--gold-dark)', padding: '14px 32px',
            fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textDecoration: 'none'
          }}>📞 Call Us Now</a>
          <Link href="/inquire" style={{
            background: 'transparent', color: 'white', padding: '14px 32px',
            border: '2px solid rgba(255,255,255,0.7)', fontWeight: '600',
            fontSize: '14px', letterSpacing: '1px', textDecoration: 'none'
          }}>Inquire Online</Link>
        </div>
      </section>

      <Footer />
      <ScrollTop />
    </>
  );
}