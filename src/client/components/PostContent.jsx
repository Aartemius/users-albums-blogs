import React from "react";
import { useParams } from "react-router-dom";

const PostContent = ({ posts }) => {
  const { postId } = useParams();
  const post = posts.find(post => post.id === Number(postId));

  return (
    <div>
      <h1
        style={{
          fontSize: '2.5rem',
          textAlign: 'left'
        }}
      >
        { post.title }
      </h1>
      <article style={{ lineHeight: '1.6' }}>{ post.body }</article>
    </div>
  );
};

export default PostContent;