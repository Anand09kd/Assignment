import React, { useState, useEffect } from 'react';
import Post from './Post';
import Loader from './Loader';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="mt-6 w-full max-w-3xl mx-auto">
      {loading ? (
        <Loader />
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Posts;
