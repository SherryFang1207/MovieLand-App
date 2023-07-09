import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';
// OMdb API key: b57b6ba8

// const API_URL = 'http://www.omdbapi.com/?apikey=b57b6ba8&'
const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=b57b6ba8';


const App =() => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        // console.log(data.Search);
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
                <input
                placeholder='Search for Movies'
                value={searchTerm}
                onChange={(event) => {setSearchTerm(event.target.value)}}
                />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                />
            </div>
            <h1 style={{fontSize:"2rem"}}>Movies you may like...</h1>
            {
                movies 
                ?(
                    <div className="container">
                        {/* <MovieCard movie1={movie1} /> */}
                        {movies.map((movie) => (<MovieCard movie={movie}/>))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2> No movies found </h2>
                    </div>
                )
                
            }
            
        </div>
    );
}

export default App;