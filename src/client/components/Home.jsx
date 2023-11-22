import React from "react";
import { Link } from "react-router-dom";
import '../styles/Home.css';

const Home = ({ users }) => {
  
  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <ul className="users-list">
        { users?.map(user => (
          <li key={ user.id }>
            <Link to={ `/user/${user.id}` } className="user-name">
              { user.name }
            </Link>
            <Link to={ `/posts/${user.id}` }>
              User posts
            </Link>
            <Link to={ `/albums/${user.id}` }>
              View albums
            </Link>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default Home;