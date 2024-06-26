import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const AddPostPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        title: title,
        description: description,
        createdAt: new Date()
      });
      setTitle('');
      setDescription('');
      setError('');
      // Optionally, you can redirect the user to another page after successful submission
    } catch (error) {
      console.error('Error adding post:', error);
      setError('Failed to add post. Please try again.');
    }    
  };
  

  return (
    <div>
      <h1>Add New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input 
            type="text" 
            id="title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea 
            id="description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
        
      </form>
      {error && <p>{error}</p>}
      <a href='/BlogListPage'>
      <button type='submit'>View Post</button>
      </a>
    </div>
  );
};

export default AddPostPage;
