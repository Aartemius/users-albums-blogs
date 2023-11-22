import React from "react";
import { Link, useParams } from "react-router-dom";
import { getCollectionByUserId } from "../utils/common";

const Albums = ({ data }) => {
  const { userId } = useParams();
  const userAlbums = getCollectionByUserId(data.albums, Number(userId));
  const user = data.users.find(user => user.id === Number(userId));
  
  return (
    <div>
      <h1>Albums of { user.name }</h1>
      <ul className="albums-list">
        { userAlbums?.map(album => (
          <li 
            key={ album.id }
            style={{
              marginBottom: '1rem',
              listStyle: 'disc'
            }}
          >
            <Link to={ `/albums/album/${ album.id }` }>
              { album.title }
            </Link>
          </li>
        )) }
      </ul>
    </div>
  );
};

export default Albums;