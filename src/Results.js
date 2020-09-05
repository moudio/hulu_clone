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
      // `https://api.themoviedb.org/3/trending/all/week?api_key=bc57add8b6a50a888a24574a5b0fb40e&language=en-US`
      const { data } = await axios.get(requests.fetchTrending);
      setMovies(data.results);

      // setMovies(request.data.results);
    }

    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie, index) => (
        <VideoCard key={index} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
