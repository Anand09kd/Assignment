import React, { useState } from 'react';
import ShareDialog from './ShareDialog';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="p-4 mb-4 bg-white shadow rounded-md">
      <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.body}</p>
      <div className="flex justify-between">
        <button
          onClick={() => setLiked(!liked)}
          className={`px-4 py-2 rounded shadow ${
            liked
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          } transition`}
        >
          {liked ? 'Unlike' : 'Like'}
        </button>
        <button
          onClick={() => setShowDialog(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
        >
          Share
        </button>
      </div>
      {showDialog && <ShareDialog onClose={() => setShowDialog(false)} />}
    </div>
  );
};

export default Post;
