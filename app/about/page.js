'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const milestones = [
  { year: '2014', title: 'Founded', desc: 'Kedar Developers was established in Parnera, Valsad with a vision to bring premium living to South Gujarat.' },
  { year: '2016', title: 'First Project', desc: 'Launched our first residential project — 40 families found their dream home within 6 months of launch.' },
  { year: '2019', title: 'Expanding Horizons', desc: 'Launched 3 simultaneous projects across Pardi region, crossing 150+ units delivered milestone.' },
  { year: '2022', title: 'RERA Certified', desc: 'All projects fully RERA compliant, reinforcing our commitment to legal transparency and buyer protection.' },
  { year: '2024', title: '400+ Families', desc: "Over 400 happy families call a Kedar Developers home their own. A milestone we're deeply proud of." },
];

const team = [
  { name: 'Kedar Patel', role: 'Founder & Managing Director', icon: '👤' },
  { name: 'Ravi Shah',   role: 'Head of Design & Architecture', icon: '👤' },
  { name: 'Priya Modi',  role: 'Customer Relations Manager',    icon: '👤' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Banner */}
      <div className="page-banner" style={{ backgroundImage: 'url(/images/hero1.png)', marginTop: '93px' }}>
        <div className="page-banner-content">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">■</span>
            <span>About Us</span>
          </div>
        </div>
      </div>

      {/* Main about */}
      <section className="section-pad">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap">
              <img src="/images/hero2.png" alt="Kedar Developers" className="about-img-main" />
              <div className="about-img-badge">
                <div className="num">10+</div>
                <div className="lbl">Years Strong</div>
              </div>
            </div>
            <div className="about-text">
              <div className="section-label">Our Story</div>
              <h2 className="section-title">The Foundation of Kedar Developers</h2>
              <div className="section-divider" />
              <p style={{ fontWeight: 600, fontSize: '16px', color: 'var(--gold)', lineHeight: '1.7', marginBottom: '20px' }}>
                TODAY, WE HAVE SEVERAL PROJECTS IN VALSAD DISTRICT, CATERING TO VARIED NEEDS AND TASTES OF OUR CUSTOMERS. TO MAKE PROPERTY BUYING EASY, WE PROVIDE COMPLETE REAL ESTATE SERVICES UNDER ONE ROOF.
              </p>
              <p>
                We, the promoters, are a leading business house of South Gujarat with value-driven business experience to our credit. Kedar Developers has always promised to deliver to its clients a unique and premium living experience.
              </p>
              <p>
                We have always believed in delivering the best of facilities, the highest standard of quality at the most affordable prices. Our previous projects are proof of our commitment towards being the best in construction and infrastructure development.
              </p>
              <p>
                We ensure quality and cost-effectiveness which in turn gets transferred to the customer. When you buy a home from us, it is not merely a business deal, but a warm bond established for a lifetime.
              </p>
              <Link href="/inquire" className="btn-gold" style={{ marginTop: '10px', display: 'inline-block' }}>Schedule a Site Visit</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="stats-bar">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-icon">🗓️</div>
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

      {/* Timeline */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div className="section-label">Our Journey</div>
            <h2 className="section-title">Milestones That Define Us</h2>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </div>
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '50%', top: 0, bottom: 0,
              width: '2px', background: 'var(--border)', transform: 'translateX(-50%)'
            }} />
            {milestones.map((m, i) => (
              <div key={i} style={{
                display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                marginBottom: '40px', position: 'relative'
              }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: '50%', top: '24px',
                  width: '14px', height: '14px', background: 'var(--gold)',
                  borderRadius: '50%', transform: 'translateX(-50%)',
                  boxShadow: '0 0 0 4px rgba(201,168,76,0.2)'
                }} />
                <div style={{
                  width: '42%', background: 'white', padding: '24px 28px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  borderTop: '3px solid var(--gold)',
                  marginRight: i % 2 === 0 ? '60px' : '0',
                  marginLeft:  i % 2 === 0 ? '0' : '60px',
                }}>
                  <div style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '22px', fontFamily: "'Playfair Display',serif" }}>{m.year}</div>
                  <h3 style={{ fontSize: '17px', margin: '6px 0 10px', color: 'var(--dark)' }}>{m.title}</h3>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.7' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="section-pad">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="section-label">What We Stand For</div>
            <h2 className="section-title">Values That Shape Every Project</h2>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </div>
          <div className="values-grid">
            {[
              { icon: '🏛️', title: 'Integrity',       desc: 'Honest pricing, transparent documentation and ethical business practices in every transaction.' },
              { icon: '🌿', title: 'Sustainability',   desc: 'Green building techniques, solar readiness and eco-conscious landscaping in every project.' },
              { icon: '⭐', title: 'Excellence',       desc: 'Premium materials, skilled craftsmen and strict quality control from foundation to finish.' },
              { icon: '❤️', title: 'Community',        desc: 'We design for people — walkable paths, play areas, clubhouses and spaces that foster belonging.' },
            ].map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
