'use client';
import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../../../lib/supabaseClient';

export default function AdminInquiriesPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const supabase = getSupabaseClient();
        const { data: records, error } = await supabase
          .from('inquiries')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setData(records || []);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: '28px', color: 'var(--dark)', marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>Project Inquiries</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>All property inquiry requests submitted through the website.</p>

      {loading ? (
        <div style={{ color: '#94a3b8' }}>Loading inquiries...</div>
      ) : (
        <div style={{ background: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <th style={{ padding: '16px 24px', color: '#475569', fontWeight: 500 }}>Date</th>
                <th style={{ padding: '16px 24px', color: '#475569', fontWeight: 500 }}>Name</th>
                <th style={{ padding: '16px 24px', color: '#475569', fontWeight: 500 }}>Contact Info</th>
                <th style={{ padding: '16px 24px', color: '#475569', fontWeight: 500 }}>Project</th>
                <th style={{ padding: '16px 24px', color: '#475569', fontWeight: 500 }}>Message</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ padding: '24px', textAlign: 'center', color: '#94a3b8' }}>No inquiries found.</td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '16px 24px', color: '#64748b', whiteSpace: 'nowrap' }}>
                      {new Date(row.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '16px 24px', color: 'var(--dark)', fontWeight: 500 }}>
                      {row.first_name} {row.last_name}
                    </td>
                    <td style={{ padding: '16px 24px', color: '#475569' }}>
                      <div>{row.email}</div>
                      <div style={{ color: '#64748b', fontSize: '13px', marginTop: '4px' }}>{row.phone}</div>
                    </td>
                    <td style={{ padding: '16px 24px', color: '#475569' }}>
                      <span style={{ background: '#f1f5f9', padding: '4px 8px', borderRadius: '4px', fontSize: '12px' }}>
                        {row.project || 'Not specified'}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', color: '#475569', maxWidth: '300px' }}>
                      <div style={{ fontWeight: 500, marginBottom: '4px' }}>{row.subject}</div>
                      <div style={{ color: '#64748b', fontSize: '13px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {row.message}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
