import React from "react";
import { useParams } from "react-router-dom";
import '../styles/Album.css';

const Album = ({ data }) => {
  const { albumId } = useParams();
  const album = data.albums.find(album => album.id === Number(albumId));
  const photos = data.photos.filter(photo => photo.albumId === Number(albumId));

  return (
    <>
      <h1>{ album.title }</h1>
      <div className="photos-wrap">
        { photos.map(photo => (
          <div key={ photo.id }>
            <div className="img-wrap">
              <img src={ photo.url } alt={ photo.title } />
            </div>
            <span>{ photo.title }</span>
          </div>
        )) }
      </div>
    </>
  );
};

export default Album;