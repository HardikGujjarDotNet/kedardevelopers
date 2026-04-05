'use client';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSupabaseClient } from '../../lib/supabaseClient';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const name = e.target['ct-name'].value;
    const phone = e.target['ct-phone'].value;
    const email = e.target['ct-email'].value;
    const subject = e.target['ct-subject'].value;
    const message = e.target['ct-message'].value;

    try {
      const supabase = getSupabaseClient();
      const { error: insertError } = await supabase
        .from('contact_messages')
        .insert([{ name, phone, email, subject, message }]);

      if (insertError) throw insertError;

      setSent(true);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
      <div className="page-banner" style={{ backgroundImage: 'url(/images/hero2.png)', marginTop: '93px' }}>
        <div className="page-banner-content">
          <h1>Contact Us</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">■</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Info cards */}
      <section className="section-pad" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="section-label">Reach Out</div>
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', marginBottom: '60px' }}>
            {[
              {
                icon: '📞',
                title: 'Call Us',
                lines: ['+91 9600000024'],
                note: 'Mon–Sat, 9am–7pm',
                href: 'tel:9600000024',
                linkLabel: 'Call Now',
              },
              {
                icon: '✉️',
                title: 'Email Us',
                lines: ['info@kedardevelopers.com'],
                note: 'We reply within 24 hours',
                href: 'mailto:info@kedardevelopers.com',
                linkLabel: 'Send Email',
              },
              {
                icon: '📍',
                title: 'Visit Our Office',
                lines: ['Param Antilia, Near PTC College,', 'Vasiyar Road, Parnera, Pardi,', 'Valsad – 369007, Gujarat'],
                note: 'Mon–Sat, 9am–7pm',
                href: 'https://maps.google.com/?q=Parnera+Pardi+Valsad',
                linkLabel: 'Get Directions',
              },
            ].map((c, i) => (
              <div key={i} style={{
                background: 'white', padding: '40px 32px',
                textAlign: 'center', boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                borderTop: '3px solid var(--gold)',
                transition: 'transform 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '44px', marginBottom: '18px' }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '20px', marginBottom: '14px', color: 'var(--dark)' }}>{c.title}</h3>
                {c.lines.map((l, j) => (
                  <p key={j} style={{ fontSize: '14px', color: '#555', lineHeight: '1.7' }}>{l}</p>
                ))}
                <p style={{ fontSize: '12px', color: 'var(--gold)', marginTop: '8px', letterSpacing: '1px' }}>{c.note}</p>
                <a href={c.href} target="_blank" rel="noreferrer" style={{
                  display: 'inline-block', marginTop: '20px',
                  color: 'var(--gold)', fontSize: '13px', fontWeight: 600,
                  letterSpacing: '1px', textDecoration: 'none',
                  borderBottom: '1px solid var(--gold)', paddingBottom: '2px'
                }}>{c.linkLabel} →</a>
              </div>
            ))}
          </div>

          {/* Contact form + Map */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }}>
            {/* Form */}
            <div>
              <div className="section-label">Send a Message</div>
              <h2 className="section-title" style={{ fontSize: '28px' }}>Let's Talk</h2>
              <div className="section-divider" />

              {sent ? (
                <div style={{ padding: '40px', background: '#f0fdf4', border: '2px solid #22c55e', textAlign: 'center' }}>
                  <div style={{ fontSize: '40px', marginBottom: '12px' }}>✅</div>
                  <h3 style={{ color: '#166534', marginBottom: '8px' }}>Message Sent!</h3>
                  <p style={{ color: '#555' }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {error && (
                    <div style={{ color: '#ef4444', fontSize: '14px', background: '#fef2f2', padding: '10px', borderRadius: '4px' }}>
                      {error}
                    </div>
                  )}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <input className="form-field" type="text"  placeholder="Your Name *"     required id="ct-name" />
                    <input className="form-field" type="tel"   placeholder="Phone Number *"   required id="ct-phone" />
                  </div>
                  <input className="form-field" type="email" placeholder="Email Address *"   required id="ct-email" />
                  <input className="form-field" type="text"  placeholder="Subject *"          required id="ct-subject" />
                  <textarea
                    className="form-field" rows={5} id="ct-message"
                    placeholder="Your Message *" required style={{ resize: 'vertical' }}
                  />
                  <button type="submit" className="btn-gold" disabled={loading} style={{
                    border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '13px',
                    letterSpacing: '2px', width: 'fit-content', opacity: loading ? 0.7 : 1
                  }}>
                    {loading ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <div className="section-label">Location</div>
              <h2 className="section-title" style={{ fontSize: '28px' }}>Find Us on the Map</h2>
              <div className="section-divider" />
              <iframe
                title="Kedar Developers Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0!2d72.951!3d20.534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0efa5edf03f5d%3A0x8f1b3d44b3a6f1d0!2sParnera%2C%20Pardi%2C%20Valsad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                style={{ width: '100%', height: '360px', border: '2px solid var(--border)', display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                background: 'var(--dark)', color: 'white',
                padding: '20px 24px', marginTop: '0',
                display: 'flex', gap: '14px', alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '22px' }}>📍</span>
                <div>
                  <div style={{ fontSize: '12px', letterSpacing: '2px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '6px' }}>Office Address</div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}>
                    Param Antilia, Near PTC College, Vasiyar Road,<br />
                    Parnera, Pardi, Valsad – 369007, Gujarat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
