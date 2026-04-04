'use client';

import { useState } from 'react';
import { getSupabaseClient } from '../../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function AddPost() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

  const supabase = getSupabaseClient(); // <- instantiate here

  const uploadImage = async (file) => {
    if (!file) return null;

    const fileName = `${Date.now()}_${file.name}`;
    const { data, error } = await supabase.storage
      .from('post-images')
      .upload(fileName, file, { upsert: true });

    if (error) {
      console.log('Upload error:', error);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from('post-images')
      .getPublicUrl(fileName);

    return publicUrlData.publicUrl;
  };

  const addPost = async () => {
    if (!title || !description) return;

    let imageUrl = null;
    if (imageFile) imageUrl = await uploadImage(imageFile);

    const { error } = await supabase
      .from('posts')
      .insert([{ Title: title, Description: description, Image: imageUrl }]);

    if (!error) {
      router.push('/posts'); // redirect after adding
    } else {
      console.log('Error adding post:', error);
    }
  };

  return (
    <div>
      <h1>Add Post</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 400 }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          style={{ padding: 5 }}
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          style={{ padding: 5, height: 100 }}
        />
        <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} />

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={addPost}
            style={{ padding: 10, background: '#0070f3', color: 'white', border: 'none', borderRadius: 5 }}
          >
            Add Post
          </button>

          <button
            onClick={() => router.push('/posts')}
            style={{ padding: 10, background: '#555', color: 'white', border: 'none', borderRadius: 5 }}
          >
            Back to List
          </button>
        </div>
      </div>
    </div>
  );
}