'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('adminUser');
    if (user) {
      setIsAuthenticated(true);
    } else if (pathname !== '/admin/login') {
      router.push('/admin/login');
    }
    setIsChecking(false);
  }, [pathname, router]);

  const handleLogout = () => {
    localStorage.removeItem('adminUser');
    setIsAuthenticated(false);
    router.push('/admin/login');
  };

  // Prevent flash of content during checks
  if (isChecking) {
    return <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc' }}>Loading...</div>;
  }

  // If on login page, just render children without sidebar
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // If not authenticated and somehow not redirecting yet, return null
  if (!isAuthenticated) {
    return null; 
  }

  const navLinks = [
    { name: 'Dashboard', href: '/admin' },
    { name: 'Inquiries', href: '/admin/inquiries' },
    { name: 'Contact Messages', href: '/admin/contacts' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc', fontFamily: 'var(--font-inter), sans-serif' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', background: 'var(--dark)', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '22px', margin: 0, color: 'var(--gold)' }}>
            Kedar Admin
          </h2>
        </div>
        <nav style={{ padding: '24px 0', flex: 1 }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link href={link.href} style={{
                    display: 'block',
                    padding: '14px 24px',
                    color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.7)',
                    backgroundColor: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                    textDecoration: 'none',
                    fontWeight: isActive ? '600' : '400',
                    borderLeft: isActive ? '3px solid var(--gold)' : '3px solid transparent',
                    transition: 'all 0.2s',
                  }}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div style={{ padding: '24px', fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
          &copy; {new Date().getFullYear()} Kedar Developers
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Topbar */}
        <header style={{ 
          background: 'white', 
          borderBottom: '1px solid #e2e8f0', 
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
        }}>
          <div>
            {/* Can add breadcrumbs or title here if desired */}
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <Link href="/" style={{ color: 'var(--dark)', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
              &larr; View Website
            </Link>
            <button onClick={handleLogout} style={{
              background: 'transparent', border: '1px solid #e2e8f0', padding: '6px 12px',
              borderRadius: '4px', fontSize: '13px', cursor: 'pointer', color: '#ef4444'
            }}>
              Logout
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div style={{ padding: '40px', overflowY: 'auto', flex: 1 }}>
          {children}
        </div>
      </main>

    </div>
  );
}
