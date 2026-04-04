'use client';

import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../lib/supabaseClient'; // Adjust the path as needed

export default function Home() {
  const [posts, setPosts] = useState([]);
  const supabase = getSupabaseClient();

  // Fetch posts from Supabase
  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('id, "Title", "Description", "Image", created_at')
      .order('id', { ascending: false });

    if (!error) setPosts(data);
    else console.log('Error fetching posts:', error);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <header style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#0070f3', color: 'white' }}>
        <h1 style={{ fontSize: 48, marginBottom: 10 }}>My New Website</h1>
        <p style={{ fontSize: 20 }}>Welcome! Browse all posts below.</p>
      </header> 

      {/* Posts Grid */}
      <main style={{ maxWidth: 1200, margin: '40px auto', padding: '0 20px' }}>
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: 18 }}>No posts available yet.</p>
        ) : (
          <div style={{
            display: 'grid',
            gap: '30px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'
          }}>
            {posts.map((post) => (
              <div key={post.id} style={{
                border: '1px solid #ddd',
                borderRadius: 10,
                overflow: 'hidden',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s'
              }}>
                {post.Image && (
                  <img
                    src={post.Image}
                    alt={post.Title}
                    style={{ width: '100%', height: 200, objectFit: 'cover' }}
                  />
                )}
                <div style={{ padding: 20 }}>
                  <h2 style={{ margin: '0 0 10px 0', fontSize: 22 }}>{post.Title}</h2>
                  <p style={{ margin: '0 0 10px 0', color: '#555' }}>{post.Description}</p>
                  <small style={{ color: '#888' }}>
                    Posted on {new Date(post.created_at).toLocaleDateString()}
                  </small>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '20px 0', background: '#f5f5f5', marginTop: 60 }}>
        <p>© {new Date().getFullYear()} My Blog Website. All rights reserved.</p>
      </footer>
    </div>
  );
}