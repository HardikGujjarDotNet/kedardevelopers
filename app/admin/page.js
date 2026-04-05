// app/admin/page.js
'use client';
import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ inquiries: 0, contacts: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const supabase = getSupabaseClient();
        const { count: inqCount } = await supabase.from('inquiries').select('*', { count: 'exact', head: true });
        const { count: contactCount } = await supabase.from('contact_messages').select('*', { count: 'exact', head: true });

        setStats({ queries: inqCount || 0, contacts: contactCount || 0 });
      } catch (err) {
        console.error('Error fetching stats', err);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '28px', color: 'var(--dark)', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>Dashboard Overview</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Welcome to the Kedar Developers Administrative Dashboard.</p>

      {loading ? (
        <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8' }}>Loading statistics...</div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          
          <div style={{ 
            background: 'white', padding: '32px', borderRadius: '12px', 
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' 
          }}>
            <h3 style={{ fontSize: '14px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              Project Inquiries
            </h3>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--dark)', marginBottom: '16px' }}>
              {stats.queries}
            </div>
            <Link href="/admin/inquiries" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
              View all inquiries &rarr;
            </Link>
          </div>

          <div style={{ 
            background: 'white', padding: '32px', borderRadius: '12px', 
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #f1f5f9' 
          }}>
            <h3 style={{ fontSize: '14px', color: '#64748b', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
              Contact Messages
            </h3>
            <div style={{ fontSize: '48px', fontWeight: 'bold', color: 'var(--dark)', marginBottom: '16px' }}>
              {stats.contacts}
            </div>
            <Link href="/admin/contacts" style={{ color: 'var(--gold)', textDecoration: 'none', fontWeight: 500, fontSize: '14px' }}>
              View all messages &rarr;
            </Link>
          </div>

        </div>
      )}
    </div>
  );
}
