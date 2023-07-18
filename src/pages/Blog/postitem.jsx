import React from 'react';

function PostItem({ post }) {
  return (
    <div className='card'>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}

export default PostItem;