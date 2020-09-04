import React, { useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import { useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.selectedOption);
      setMovies(request.data.results);
    }

    fetchData();
  }, []);
  console.log(movies);
  return (
    <div className="results">
      {movies.map((movie, index) => (
        <VideoCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
