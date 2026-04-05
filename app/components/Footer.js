import Link from 'next/link';

const projects = [
  { name: 'Kedar Heights',   slug: 'kedar-heights' },
  { name: 'Kedar Greens',    slug: 'kedar-greens' },
  { name: 'Kedar Residency', slug: 'kedar-residency' },
];

const sitemap = [
  { name: 'Home',     href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Inquire',  href: '/inquire' },
  { name: 'Contact',  href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand col */}
          <div>
            <div className="footer-logo">KEDAR</div>
            <div className="footer-logo-sub">Developers</div>
            <p className="footer-tagline">
              Building homes that inspire pride and create lasting communities across South Gujarat.
            </p>
            <div className="footer-social">
              <a href="#" className="social-btn" aria-label="Facebook">f</a>
              <a href="#" className="social-btn" aria-label="Instagram">in</a>
              <a href="#" className="social-btn" aria-label="LinkedIn">li</a>
              <a href="#" className="social-btn" aria-label="YouTube">▶</a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4>Sitemap</h4>
            <ul className="footer-links">
              {sitemap.map((s) => (
                <li key={s.href}><Link href={s.href}>{s.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h4>Our Projects</h4>
            <ul className="footer-links">
              {projects.map((p) => (
                <li key={p.slug}><Link href={`/projects/${p.slug}`}>{p.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h4>Get In Touch</h4>
            <div className="footer-contact-item">
              <span className="icon">📞</span>
              <span><a href="tel:9600000024" style={{ color: 'inherit', textDecoration: 'none' }}>+91 9600000024</a></span>
            </div>
            <div className="footer-contact-item">
              <span className="icon">✉</span>
              <span>info@kedardevelopers.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="icon">📍</span>
              <span>Param Antilia, Near PTC College, Vasiyar Road, Parnera, Pardi, Valsad – 369007</span>
            </div>

            {/* Google Map embed */}
            <iframe
              className="footer-map"
              title="Kedar Developers Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0!2d72.951!3d20.534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0efa5edf03f5d%3A0x8f1b3d44b3a6f1d0!2sParnera%2C%20Pardi%2C%20Valsad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© Kedar Developers {new Date().getFullYear()}. All Rights Reserved.</span>
        <span>Crafted with ♥ for South Gujarat</span>
      </div>
    </footer>
  );
}
