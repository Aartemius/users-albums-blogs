import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Posts from "./components/Posts";
import PostContent from "./components/PostContent";
import './App.css';
import TopBar from "./components/TopBar";
import UserDetails from "./components/UserDetails";
import Album from "./components/Album";

const App = ({ data }) => {
  const routes = [
    {
      path: '/',
      element: <Home users={ data.users } />
    },
    {
      path: '/albums/:userId',
      element: <Albums data={ data } />
    }, {
      path: '/albums/album/:albumId',
      element: <Album data={ data } />
    }, {
      path: '/posts/:userId',
      element: <Posts data={ data } />
    },
    {
      path: '/posts/:userId/:postId',
      element: <PostContent posts={ data.posts } />
    }, {
      path: '/user/:userId',
      element: <UserDetails data={ data.users } />
    }
  ];
  
  return (
    <>
      <TopBar /><div className="app-container">
        <Routes>
          { routes.map((route, index) => (
            <Route
              key={ index }
              path={ route.path }
              element={ route.element } />
          )) }
        </Routes>
      </div>
    </>
  );
};

export default App;