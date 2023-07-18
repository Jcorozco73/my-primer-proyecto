import React from 'react';
import PostItem from './postitem';

function PostList() {
  const posts = [
    { id: 1, 
      title: 'Receta 1',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellendus sed totam laudantium fugit neque nihil facere quasi voluptates odio tempore deserunt illo sint cupiditate soluta nobis, nam, iusto quam?' },
    { id: 2,
      title: 'Receta 2',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellendus sed totam laudantium fugit neque nihil facere quasi voluptates odio tempore deserunt illo sint cupiditate soluta nobis, nam, iusto quam?' },
    { id: 3,
      title: 'Receta 3',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellendus sed totam laudantium fugit neque nihil facere quasi voluptates odio tempore deserunt illo sint cupiditate soluta nobis, nam, iusto quam?' },
    { id: 4,
      title: 'Receta 4',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum repellendus sed totam laudantium fugit neque nihil facere quasi voluptates odio tempore deserunt illo sint cupiditate soluta nobis, nam, iusto quam?' }
  ];

  return (
    <div>
    <h1 className='text-center'>Blog de cocina</h1>
    
      {posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
    
  );
  
}

export default PostList;