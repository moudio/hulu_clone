import React, { useState } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import { useEffect } from 'react';
import axios from './axios';
import requests from './requests';

function Results() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log('calling the fetchdata');
      const request = await axios.get(requests.fetchActionMovies);
      setMovies(request.data.results);
    }

    fetchData();
  }, []);
  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard />
      ))}
    </div>
  );
}

export default Results;
