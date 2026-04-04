'use client';

import { useEffect, useState } from 'react';

export default function ComingSoon() {
  const [dotClass, setDotClass] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotClass((prev) => (prev + 1) % 3);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      height: '100vh',
      width: '100%',
      backgroundImage: 'url(/images/construction1.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
      }}>
        <div style={{
          backdropFilter: 'blur(12px)',
          background: 'rgba(255,255,255,0.08)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '16px',
          padding: '50px 40px',
          textAlign: 'center',
          color: '#fff',
          maxWidth: '600px',
          boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
          animation: 'fadeIn 1.5s ease'
        }}>
          <h1 style={{ fontSize: '60px', marginBottom: '15px', letterSpacing: '2px' }}>
            🚧 Coming Soon
          </h1>
          <p style={{ fontSize: '20px', lineHeight: '1.6', color: '#ddd', marginBottom: '20px' }}>
            We’re building something amazing for you.<br />
            Our website is under construction and will be live soon.
          </p>

          <p style={{ fontSize: '18px', color: '#ccc', marginBottom: '30px' }}>
            📍 Param Antilia, Near PTC College, Vasiyar Road, Parnera, Pardi, Valsad – 369007
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
            <span className={dotClass === 0 ? 'dot active' : 'dot'}></span>
            <span className={dotClass === 1 ? 'dot active' : 'dot'}></span>
            <span className={dotClass === 2 ? 'dot active' : 'dot'}></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .dot {
          width: 12px;
          height: 12px;
          background-color: #FF6F61;
          border-radius: 50%;
          transform: scale(0);
          display: inline-block;
          animation: bounce 1.2s infinite ease-in-out;
          animation-fill-mode: both;
        }

        .dot:nth-child(1) { animation-delay: 0s; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }

        .dot.active { transform: scale(1); }
      `}</style>
    </div>
  );
}