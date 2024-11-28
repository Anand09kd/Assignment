import React, { useState } from 'react';
import Posts from './components/Posts';

const App = () => {
  const [showPosts, setShowPosts] = useState(false);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <button
        onClick={() => setShowPosts(true)}
        className="px-6 py-3 bg-blue-600 text-white rounded shadow-md hover:bg-blue-700 transition"
      >
        Add Post
      </button>
      {showPosts && <Posts />}
    </div>
  );
};

export default App;
