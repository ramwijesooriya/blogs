import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Our Blogs Website
        </h1>
        <p className="text-lg mb-6">
          If you want to create a post, press the create button.
        </p>
        <Link to="/AddPostPage">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transform hover:scale-105 transition duration-300 ease-in-out">
            Create Post
          </button>
        </Link>
        <div className='p-5'>
<Link to="/Login">
            <button className='right-0 top-0'>Sign in</button>
            </Link>
</div>
      </div>
      
    </div>
  );
};

export default Blogs;
