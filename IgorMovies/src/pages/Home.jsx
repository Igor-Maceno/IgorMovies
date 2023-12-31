import React, { useEffect, useState } from 'react';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
    }

    useEffect(() => {
        const getTopRatedURL = `${moviesURL}top_rated?${apiKey}`;
        
        getTopRatedMovies(getTopRatedURL);
    }, []);

  return (
    <div>
        <h2>Home</h2>
    </div>
  )
}

export default Home;