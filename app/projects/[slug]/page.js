'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { use } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/* ── Project data ── */
const projectData = {
  'kedar-heights': {
    name: 'Kedar Heights',
    tagline: 'A Villa Life Reserved for the Fortunate Few',
    type: '3 & 4 BHK Premium Villas',
    location: 'Parnera, Pardi, Valsad',
    status: 'Ongoing',
    units: '24 Units',
    heroImg: '/images/hero2.png',
    gallery: ['/images/hero1.png', '/images/hero2.png', '/images/hero3.png',
               '/images/hero1.png', '/images/hero2.png', '/images/hero3.png'],
    about: 'Kedar Heights is our flagship villa project — a collection of 24 meticulously crafted row villas offering 3 and 4 BHK configurations. Each villa features a private garden, double-height entrance lobby, and premium imported finishes.',
    amenities: [
      'Private Garden per Villa', 'Double-Height Entrance Lobby', 'Modular Kitchen Provision',
      'Vitrified Tile Flooring', 'Premium Sanitary Fittings', 'CCTV Security & Intercom',
      'Children\'s Play Area', 'Landscaped Common Areas', 'Covered Parking',
      'Solar Provision on Terrace', 'Rainwater Harvesting', '24×7 Water Supply',
    ],
    specs: [
      { label: 'Ground Floor', size: '1,450 sq ft', beds: '3 BHK' },
      { label: 'First Floor',  size: '1,650 sq ft', beds: '4 BHK' },
    ],
    floorPlans: ['/images/hero1.png', '/images/hero2.png'],
  },
  'kedar-greens': {
    name: 'Kedar Greens',
    tagline: 'Where Every Morning Feels Like a Retreat',
    type: '2 & 3 BHK Apartments',
    location: 'Vasiyar Road, Parnera, Valsad',
    status: 'Ongoing',
    units: '48 Units',
    heroImg: '/images/hero1.png',
    gallery: ['/images/hero1.png', '/images/hero2.png', '/images/hero3.png',
               '/images/hero2.png', '/images/hero3.png', '/images/hero1.png'],
    about: 'Kedar Greens is a thoughtfully planned apartment community set amidst lush tropical landscaping on Vasiyar Road, Parnera. The project offers 48 apartments across 2 and 3 BHK configurations, each designed with practical layouts and premium finishes.',
    amenities: [
      'Podium Level Parking', 'Swimming Pool & Deck', 'Clubhouse with Gym',
      'Jogging Track', 'Kids Play Zone', 'Multi-Purpose Hall',
      'Landscaped Gardens', 'Power Backup', '24×7 Security',
      'Solar Water Heater', 'EV Charging Points', 'Senior Citizen Corner',
    ],
    specs: [
      { label: '2 BHK Apartment', size: '950 sq ft', beds: '2 BHK' },
      { label: '3 BHK Apartment', size: '1,250 sq ft', beds: '3 BHK' },
    ],
    floorPlans: ['/images/hero2.png', '/images/hero1.png'],
  },
  'kedar-residency': {
    name: 'Kedar Residency',
    tagline: 'Completed — 36 Happy Families & Counting',
    type: '2 & 3 BHK Residences',
    location: 'Near PTC College, Parnera, Valsad',
    status: 'Completed',
    units: '36 Units',
    heroImg: '/images/hero3.png',
    gallery: ['/images/hero3.png', '/images/hero1.png', '/images/hero2.png',
               '/images/hero3.png', '/images/hero1.png', '/images/hero2.png'],
    about: 'Kedar Residency is our successfully completed project — a proud landmark near PTC College, Parnera. All 36 units were handed over on time and our residents continue to share their love for the quality of their homes.',
    amenities: [
      'Covered Car Parking', 'CCTV Surveillance', 'Intercom Facility',
      'Landscaped Garden', 'Children\'s Play Area', 'Water Softener Plant',
      'Power Backup for Common Areas', 'Solar Street Lights', 'RCC Structure',
      'Vitrified Flooring', 'Branded Sanitary Ware', 'Modular Kitchen Ready',
    ],
    specs: [
      { label: '2 BHK Apartment', size: '880 sq ft', beds: '2 BHK' },
      { label: '3 BHK Apartment', size: '1,150 sq ft', beds: '3 BHK' },
    ],
    floorPlans: ['/images/hero1.png', '/images/hero3.png'],
  },
};

export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const p = projectData[slug];
  if (!p) notFound();

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div style={{ position: 'relative', height: '520px', marginTop: '93px', overflow: 'hidden' }}>
        <img src={p.heroImg} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 100%)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px'
        }}>
          <div style={{ color: 'white' }}>
            <div style={{
              display: 'inline-block', background: p.status === 'Completed' ? '#2d6a4f' : 'var(--gold)',
              color: 'white', fontSize: '11px', fontWeight: 700, letterSpacing: '3px',
              textTransform: 'uppercase', padding: '6px 18px', marginBottom: '18px'
            }}>{p.status}</div>
            <div style={{ fontSize: '13px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '10px' }}>{p.type}</div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,4vw,56px)', fontWeight: 700, lineHeight: 1.15, marginBottom: '14px' }}>{p.name}</h1>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.85)', marginBottom: '30px', fontStyle: 'italic' }}>{p.tagline}</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/inquire" className="btn-gold">Inquire Now</Link>
              <a href="tel:9600000024" className="btn-outline">📞 Call Us</a>
            </div>
          </div>
        </div>
        {/* Breadcrumb */}
        <div style={{ position: 'absolute', bottom: '24px', right: '40px' }}>
          <div className="breadcrumb">
            <Link href="/" style={{ color: 'rgba(255,255,255,0.8)' }}>Home</Link>
            <span className="breadcrumb-sep" style={{ color: 'var(--gold)' }}>■</span>
            <Link href="/projects" style={{ color: 'rgba(255,255,255,0.8)' }}>Projects</Link>
            <span className="breadcrumb-sep" style={{ color: 'var(--gold)' }}>■</span>
            <span style={{ color: 'var(--gold)' }}>{p.name}</span>
          </div>
        </div>
      </div>

      {/* Quick info strip */}
      <div style={{ background: 'var(--dark)', padding: '24px 40px' }}>
        <div style={{
          maxWidth: 900, margin: '0 auto', display: 'flex',
          justifyContent: 'space-around', gap: '20px', flexWrap: 'wrap'
        }}>
          {[
            { icon: '📍', l: 'Location',  v: p.location },
            { icon: '🏠', l: 'Units',     v: p.units },
            { icon: '🏗️', l: 'Status',    v: p.status },
            { icon: '📐', l: 'Type',      v: p.type },
          ].map((item) => (
            <div key={item.l} style={{ textAlign: 'center', color: 'white', minWidth: '140px' }}>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{item.icon}</div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>{item.l}</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)' }}>{item.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* About Project */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="section-label">Overview</div>
          <h2 className="section-title">About {p.name}</h2>
          <div className="section-divider" />
          <p style={{ fontSize: '16px', lineHeight: '1.9', color: '#555' }}>{p.about}</p>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label">What's Included</div>
            <h2 className="section-title">Amenities</h2>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '16px'
          }}>
            {p.amenities.map((a, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                background: 'white', padding: '16px 20px',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                borderLeft: '3px solid var(--gold)',
                fontSize: '14px', color: 'var(--charcoal)',
              }}>
                <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '16px' }}>✓</span>
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="section-label">Visual Tour</div>
            <h2 className="section-title">Gallery</h2>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
            {p.gallery.map((img, i) => (
              <div key={i} style={{ overflow: 'hidden' }}>
                <img
                  src={img}
                  alt={`${p.name} gallery ${i + 1}`}
                  style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs + Floor Plans side by side */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          {/* Specs */}
          <div>
            <div className="section-label">Unit Details</div>
            <h2 className="section-title" style={{ fontSize: '28px' }}>Specifications</h2>
            <div className="section-divider" />
            {p.specs.map((s, i) => (
              <div key={i} style={{
                background: 'white', padding: '24px 28px', marginBottom: '16px',
                borderLeft: '4px solid var(--gold)',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)'
              }}>
                <div style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '8px' }}>{s.beds}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '20px', fontWeight: 700, color: 'var(--dark)', marginBottom: '6px' }}>{s.label}</div>
                <div style={{ fontSize: '15px', color: '#666' }}>📐 Carpet Area: <strong>{s.size}</strong></div>
              </div>
            ))}
          </div>

          {/* Floor Plans */}
          <div>
            <div className="section-label">Layout</div>
            <h2 className="section-title" style={{ fontSize: '28px' }}>Floor Plans</h2>
            <div className="section-divider" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {p.floorPlans.map((img, i) => (
                <img key={i} src={img} alt={`Floor plan ${i + 1}`}
                  style={{ width: '100%', height: '200px', objectFit: 'cover', border: '2px solid var(--border)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry + Contact CTA */}
      <section className="section-pad">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          {/* Inline Inquiry Form */}
          <div>
            <div className="section-label">Get in Touch</div>
            <h2 className="section-title" style={{ fontSize: '28px' }}>Enquire About {p.name}</h2>
            <div className="section-divider" />
            <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              onSubmit={e => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <input className="form-field" type="text"  placeholder="Your Name *"  required />
                <input className="form-field" type="tel"   placeholder="Phone *"       required />
              </div>
              <input className="form-field" type="email" placeholder="Email Address *" required />
              <textarea className="form-field" rows={4} placeholder="Your Message" style={{ resize: 'vertical' }} />
              <button type="submit" className="btn-gold" style={{ border: 'none', cursor: 'pointer', width: 'fit-content' }}>
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '28px' }}>
            <div>
              <div style={{ fontSize: '12px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '16px' }}>Contact Us</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: 'var(--dark)' }}>We're Here to Help</div>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: '1.8' }}>Reach out to our team for pricing, availability, site visit scheduling or any other queries.</p>
            </div>
            {[
              { icon: '📞', t: 'Call Us',    v: '+91 9600000024', href: 'tel:9600000024' },
              { icon: '✉️', t: 'Email',      v: 'info@kedardevelopers.com', href: 'mailto:info@kedardevelopers.com' },
              { icon: '📍', t: 'Visit Us',   v: 'Param Antilia, Near PTC College, Vasiyar Road, Parnera, Pardi, Valsad – 369007', href: '#' },
            ].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '48px', height: '48px', background: 'var(--gold)',
                  borderRadius: '50%', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '20px', flexShrink: 0
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: '12px', letterSpacing: '1px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '4px' }}>{c.t}</div>
                  <a href={c.href} style={{ fontSize: '15px', color: 'var(--charcoal)', textDecoration: 'none' }}>{c.v}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
