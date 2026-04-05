'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      let data;
      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        console.error("Non-JSON response:", text);
        // It's likely a server exception or missing env config
        throw new Error("Server returned an invalid response. Ensure your .env variables (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY) are configured and restarting 'npm run dev'.");
      }

      if (!res.ok) {
        throw new Error(data?.error || 'Failed to login');
      }

      // Store in localStorage for client-side session logic
      localStorage.setItem('adminUser', JSON.stringify(data.user));
      
      // Redirect to the admin dashboard
      router.push('/admin');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '100vh', background: 'var(--dark)'
    }}>
      
      <div style={{
        background: 'white', padding: '48px', borderRadius: '12px',
        width: '100%', maxWidth: '440px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        borderTop: '4px solid var(--gold)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '28px', color: 'var(--dark)', margin: 0 }}>
            Admin Portal
          </h1>
          <p style={{ color: '#64748b', fontSize: '14px', marginTop: '8px' }}>
            Sign in to Kedar Developers dashboard
          </p>
        </div>

        {error && (
          <div style={{
            background: '#fef2f2', color: '#ef4444', padding: '12px 16px',
            borderRadius: '6px', fontSize: '14px', marginBottom: '20px', border: '1px solid #fee2e2'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#475569', marginBottom: '6px' }}>Username</label>
            <input 
              type="text" 
              value={username} onChange={e => setUsername(e.target.value)}
              required
              className="form-field"
              style={{ padding: '12px 16px', background: '#f8fafc' }}
              placeholder="Enter username"
            />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#475569', marginBottom: '6px' }}>Password</label>
            <input 
              type="password" 
              value={password} onChange={e => setPassword(e.target.value)}
              required
              className="form-field"
              style={{ padding: '12px 16px', background: '#f8fafc' }}
              placeholder="Enter password"
            />
          </div>
          
          <button type="submit" disabled={loading} className="btn-gold" style={{
            width: '100%', padding: '14px', marginTop: '8px', cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1, textAlign: 'center', fontWeight: 'bold'
          }}>
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>
        </form>
      </div>
      <div style={{ marginTop: '24px', color: 'rgba(255,255,255,0.4)', fontSize: '12px', letterSpacing: '1px' }}>
        &copy; {new Date().getFullYear()} Kedar Developers
      </div>
    </div>
  );
}
