'use client';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    name: 'Kedar Heights',
    slug: 'kedar-heights',
    type: '3 & 4 BHK Premium Villas',
    location: 'Parnera, Pardi, Valsad',
    status: 'Ongoing',
    units: '24 Units',
    img: '/images/hero2.png',
    desc: 'Row villas crafted with artisan detailing, private gardens and premium finishes for the discerning homeowner.',
  },
  {
    name: 'Kedar Greens',
    slug: 'kedar-greens',
    type: '2 & 3 BHK Apartments',
    location: 'Vasiyar Road, Parnera, Valsad',
    status: 'Ongoing',
    units: '48 Units',
    img: '/images/hero1.png',
    desc: 'A serene apartment community surrounded by lush greenery, offering modern amenities at an accessible price point.',
  },
  {
    name: 'Kedar Residency',
    slug: 'kedar-residency',
    type: '2 & 3 BHK Residences',
    location: 'Near PTC College, Parnera, Valsad',
    status: 'Completed',
    units: '36 Units',
    img: '/images/hero3.png',
    desc: 'A completed landmark project — 36 families enjoying premium living in the heart of Parnera.',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: 'url(/images/hero3.png)', marginTop: '93px' }}>
        <div className="page-banner-content">
          <h1>Our Projects</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">■</span>
            <span>Projects</span>
          </div>
        </div>
      </div>

      {/* Projects list */}
      <section className="section-pad">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="section-label">Portfolio</div>
            <h2 className="section-title">All Projects</h2>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {projects.map((p, i) => (
              <div key={p.slug} style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '60px',
                alignItems: 'center',
                direction: i % 2 === 0 ? 'ltr' : 'rtl',
              }}>
                {/* Image */}
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block', transition: 'transform 0.5s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Status badge */}
                  <div style={{
                    position: 'absolute', top: '20px', left: '20px',
                    background: p.status === 'Completed' ? '#2d6a4f' : 'var(--gold)',
                    color: 'white', padding: '6px 16px',
                    fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                  }}>{p.status}</div>
                </div>

                {/* Text */}
                <div style={{ direction: 'ltr' }}>
                  <div className="section-label">{p.type}</div>
                  <h2 className="section-title" style={{ fontSize: '34px' }}>{p.name}</h2>
                  <div className="section-divider" />
                  <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.85', marginBottom: '24px' }}>{p.desc}</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px' }}>
                    {[
                      { icon: '📍', label: p.location },
                      { icon: '🏠', label: p.units },
                      { icon: '🏗️', label: `Status: ${p.status}` },
                    ].map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#555' }}>
                        <span>{item.icon}</span> {item.label}
                      </div>
                    ))}
                  </div>

                  <Link href={`/projects/${p.slug}`} className="btn-gold">View Project →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: 'var(--dark)', padding: '70px 40px',
        textAlign: 'center', color: 'white'
      }}>
        <div className="section-label" style={{ color: 'var(--gold)' }}>Ready to Invest?</div>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: '36px', margin: '14px 0 18px' }}>
          Interested in a Property?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto 32px', lineHeight: '1.8' }}>
          Speak to our team and find the right home for your family today.
        </p>
        <Link href="/inquire" className="btn-gold">Inquire Now</Link>
      </section>

      <Footer />
    </>
  );
}
