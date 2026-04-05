'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const projects = [
  { name: 'Kedar Heights',    slug: 'kedar-heights' },
  { name: 'Kedar Greens',     slug: 'kedar-greens' },
  { name: 'Kedar Residency',  slug: 'kedar-residency' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Top bar */}
      <div className="top-bar">
        <span>📞 <a href="tel:9600000024">+91 9600000024</a></span>
        <span>📍 Parnera, Pardi, Valsad – 369007</span>
      </div>

      {/* Main navbar */}
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo">
            KEDAR
            <span>DEVELOPERS</span>
          </Link>

          {/* Desktop links */}
          <ul className="navbar-links">
            <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li><Link href="/about" className={isActive('/about') ? 'active' : ''}>About Us</Link></li>
            <li className="nav-dropdown">
              <Link href="/projects" className={pathname.startsWith('/projects') ? 'active' : ''}>
                Projects ▾
              </Link>
              <div className="dropdown-menu">
                {projects.map((p) => (
                  <Link key={p.slug} href={`/projects/${p.slug}`}>{p.name}</Link>
                ))}
              </div>
            </li>
            <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact Us</Link></li>
          </ul>

          {/* CTA */}
          <Link href="/inquire" className="navbar-cta">Inquire Now</Link>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <button className="mobile-nav-close" onClick={() => setMobileOpen(false)}>✕</button>
        <Link href="/"         onClick={() => setMobileOpen(false)}>Home</Link>
        <Link href="/about"    onClick={() => setMobileOpen(false)}>About Us</Link>
        <Link href="/projects" onClick={() => setMobileOpen(false)}>Projects</Link>
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} onClick={() => setMobileOpen(false)}
            style={{ fontSize: '16px', color: 'var(--gold)' }}>
            — {p.name}
          </Link>
        ))}
        <Link href="/contact"  onClick={() => setMobileOpen(false)}>Contact Us</Link>
        <Link href="/inquire"  onClick={() => setMobileOpen(false)}
          style={{ background: 'var(--gold)', padding: '12px 32px', fontSize: '14px', marginTop: '10px' }}>
          Inquire Now
        </Link>
      </div>
    </>
  );
}
