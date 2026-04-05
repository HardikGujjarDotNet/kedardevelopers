'use client';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div style={{
        minHeight: '70vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '60px 24px',
        background: 'var(--cream)',
        marginTop: '93px',
      }}>
        <div style={{ fontSize: '80px', marginBottom: '16px' }}>🏗️</div>
        <h1 style={{
          fontFamily: "'Playfair Display',serif",
          fontSize: '80px', fontWeight: 700,
          color: 'var(--gold)', lineHeight: 1, marginBottom: '16px'
        }}>404</h1>
        <h2 style={{ fontSize: '26px', color: 'var(--dark)', marginBottom: '16px' }}>Page Not Found</h2>
        <p style={{ color: '#666', fontSize: '16px', maxWidth: '440px', lineHeight: '1.8', marginBottom: '36px' }}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn-gold">Go Home</Link>
          <Link href="/projects" style={{
            display: 'inline-block', padding: '14px 32px',
            border: '2px solid var(--gold)', color: 'var(--gold)',
            textDecoration: 'none', fontWeight: 600, fontSize: '13px',
            letterSpacing: '2px', textTransform: 'uppercase',
            transition: 'all 0.3s',
          }}>View Projects</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
