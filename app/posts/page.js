'use client';

import { useEffect, useState } from 'react';
import { getSupabaseClient } from '../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const supabase = getSupabaseClient(); // <- instantiate here

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('id, "Title", "Description", "Image", created_at')
      .order('id', { ascending: false });

    if (!error) setPosts(data);
    else console.log(error);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts List</h1>
      <button
        onClick={() => router.push('/posts/add')}
        style={{ marginBottom: 20, padding: 10, background: '#0070f3', color: 'white', border: 'none', borderRadius: 5 }}
      >
        Add New Post
      </button>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {posts.map((post) => (
            <div key={post.id} style={{ border: '1px solid #ccc', borderRadius: 5, padding: 10 }}>
              <h3>{post.Title}</h3>
              <p>{post.Description}</p>
              {post.Image && (
                <img src={post.Image} alt="Post Image" style={{ width: '100%', borderRadius: 5 }} />
              )}
              <small>Created at: {new Date(post.created_at).toLocaleString()}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}