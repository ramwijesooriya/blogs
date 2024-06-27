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
    } catch (error) {
      console.error('Error adding post:', error);
      setError('Failed to add post. Please try again.');
    }    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Add New Post</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-gray-700">Title:</label>
            <input 
              type="text" 
              id="title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700">Description:</label>
            <textarea 
              id="description" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        <div className="text-center mt-6">
          <a href="/BlogListPage">
            <button 
              type="button" 
              className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-full shadow-lg hover:bg-gray-700 transform hover:scale-105 transition duration-300 ease-in-out"
            >
              View Posts
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddPostPage;
