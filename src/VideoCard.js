import React from 'react';
import './VideoCard.css';

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <h1>Hello</h1>
      <img src="https://static.toiimg.com/photo/73491567.jpeg" alt="" />
      <p>This is a film about coding</p>
      <h2>Movie Title</h2>
      <p>Number of likes...</p>
    </div>
  );
}

export default VideoCard;
