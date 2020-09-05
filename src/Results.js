import React, { useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import { useEffect } from 'react';
import axios from './axios';
import requests from './requests';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(selectedOption);
      setMovies(data.results);
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
