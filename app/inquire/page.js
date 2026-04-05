'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getSupabaseClient } from '../../lib/supabaseClient';

const projects = ['Kedar Heights', 'Kedar Greens', 'Kedar Residency'];

export default function InquirePage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const first_name = e.target['inq-fname'].value;
    const last_name = e.target['inq-lname'].value;
    const email = e.target['inq-email'].value;
    const phone = e.target['inq-phone'].value;
    const project = e.target['inq-project'].value;
    const subject = e.target['inq-subject'].value;
    const message = e.target['inq-message'].value;

    try {
      const supabase = getSupabaseClient();
      const { error: insertError } = await supabase
        .from('inquiries')
        .insert([{ first_name, last_name, email, phone, project, subject, message }]);

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
      <div className="page-banner" style={{ backgroundImage: 'url(/images/hero1.png)', marginTop: '93px' }}>
        <div className="page-banner-content">
          <h1>Inquire Now</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="breadcrumb-sep">■</span>
            <span>Inquire Now</span>
          </div>
        </div>
      </div>

      <section className="section-pad">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="section-label">We'd Love to Hear From You</div>
            <h2 className="section-title">Inquire <span className="gold-text">Now</span></h2>
            <div className="section-divider" style={{ margin: '20px auto 0' }} />
            <p style={{ color: '#666', fontSize: '15px', marginTop: '20px', lineHeight: '1.8' }}>
              Fill in the form below and our team will get back to you within 24 hours to discuss your requirements and schedule a site visit.
            </p>
          </div>

          {sent ? (
            <div style={{
              textAlign: 'center', padding: '60px 40px',
              background: 'var(--cream)', border: '2px solid var(--gold)'
            }}>
              <div style={{ fontSize: '56px', marginBottom: '20px' }}>✅</div>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '28px', color: 'var(--dark)', marginBottom: '14px' }}>
                Thank You for Reaching Out!
              </h3>
              <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.8', marginBottom: '28px' }}>
                We have received your inquiry. Our team will call you within 24 working hours.
              </p>
              <a href="tel:9600000024" className="btn-gold">📞 Call Us Now: +91 9600000024</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'white', padding: '48px', boxShadow: '0 4px 40px rgba(0,0,0,0.08)' }}>
              {error && (
                <div style={{ color: '#ef4444', fontSize: '14px', background: '#fef2f2', padding: '10px', borderRadius: '4px', marginBottom: '16px' }}>
                  {error}
                </div>
              )}
              <div className="form-grid">
                <input className="form-field" type="text"  placeholder="First Name *" required id="inq-fname" />
                <input className="form-field" type="text"  placeholder="Last Name *"  required id="inq-lname" />
                <input className="form-field" type="email" placeholder="Email Address *" required id="inq-email" />
                <input className="form-field" type="tel"   placeholder="Phone Number *"  required id="inq-phone" />

                <select className="form-field form-select" id="inq-project">
                  <option value="">Select Project</option>
                  {projects.map(p => <option key={p} value={p}>{p}</option>)}
                </select>

                <input className="form-field" type="text" placeholder="Subject *" required id="inq-subject" />

                <textarea
                  className="form-field form-full"
                  rows={5} id="inq-message"
                  placeholder="Your Message *"
                  required
                  style={{ resize: 'vertical' }}
                />
              </div>

              <div style={{ marginTop: '8px' }}>
                <button type="submit" className="btn-gold" disabled={loading} style={{
                  border: 'none', cursor: loading ? 'not-allowed' : 'pointer',
                  fontSize: '13px', letterSpacing: '2px', opacity: loading ? 0.7 : 1
                }}>
                  {loading ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Contact quick links */}
      <section style={{ background: 'var(--dark)', padding: '60px 40px' }}>
        <div className="container">
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
            gap: '30px', maxWidth: '800px', margin: '0 auto'
          }}>
            {[
              { icon: '📞', label: 'Call Us',  value: '+91 9600000024', href: 'tel:9600000024' },
              { icon: '✉️', label: 'Email',    value: 'info@kedardevelopers.com', href: 'mailto:info@kedardevelopers.com' },
              { icon: '📍', label: 'Address',  value: 'Parnera, Pardi, Valsad – 369007', href: '#' },
            ].map((c, i) => (
              <div key={i} style={{ textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>{c.icon}</div>
                <div style={{ fontSize: '11px', letterSpacing: '3px', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '8px' }}>{c.label}</div>
                <a href={c.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', lineHeight: '1.6' }}>{c.value}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
