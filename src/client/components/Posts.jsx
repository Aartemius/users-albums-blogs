import React from "react";
import { useParams } from "react-router-dom";
import { getCollectionByUserId } from "../utils/common";
import { Link } from "react-router-dom";
import '../styles/Posts.css';

const Posts = ({ data }) => {
  const { userId } = useParams();
  const userPosts = getCollectionByUserId(data.posts, Number(userId));
  const user = data.users.find(user => user.id === Number(userId));
  
  return (
    <>
      <h1>Posts of { user.name }</h1>
      { userPosts.map(post => (
        <div key={ post.id } className="user-post">
          <span>{ post.title }</span>
          <Link to={ `/posts/${userId}/${post.id}` } style={{ marginLeft: 'auto' }}>
            Read more
          </Link>
        </div>
      )) }
    </>
  );
};

export default Posts;