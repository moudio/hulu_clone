import React from 'react';
import './VideoCard.css';
const baseURL = 'https://image.tmdb.org/t/p/original';

function VideoCard({ movie }) {
  console.log(movie);
  return (
    <div className="videoCard">
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        alt="Move poster"
      />
      <p>{movie.overview}</p>
      <h2>Movie Title</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;
