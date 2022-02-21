import {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from '../companents/MovieCard';

import './main.scss';

const HomePage = () => {
    
    const [moviesList, setMoviesList] = useState({
        isFetched: false,
        data: [],
        error: null
    });

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/tv/popular', {
            params: {
                api_key: '8d08d31e1b08de961a19e2ae293de867'
            }
        })
        .then(function (response) {
            setMoviesList({
                isFetched: true,
                data: response.data.results,
                error: false,
            })
        })
        .catch(function (error) {
            setMoviesList({
                isFetched: true,
                data: [],
                error: error
            })
        })
    }, []);
    
    console.log(moviesList.data);

    return (
        <div className="main">
            {
                moviesList.isFetched ? (
                    <div className="movies-list">
                      {
                          moviesList.data.map((item, index) => (
                              <MovieCard
                              id={item.id}
                              imgLink={item.poster_path}
                              title={item.title}
                              releaseDate={item.release_date}
                              key={index}
                              vote={item.vote_average}
                              />
                          ))
                      }
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )
            }
        </div>
    )
}

export default HomePage;