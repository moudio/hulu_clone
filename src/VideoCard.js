import React from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import { ThumbUpSharp } from '@material-ui/icons';
const baseURL = 'https://image.tmdb.org/t/p/original';

function VideoCard({ movie }) {
  return (
    <div className="videoCard">
      <img
        src={`${baseURL}${movie.backdrop_path || movie.poster_path}`}
        alt="Move poster"
      />
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        textTruncateChild={<a href="#">Read On...</a>}
        text={movie.overview}
      />
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {' '}
        {movie.media_type && `${movie.media_type}  •`}
        {movie.release_date || movie.first_air_date} •
        <ThumbUpSharp />
        {movie.vote_count}
      </p>
    </div>
  );
}

export default VideoCard;
