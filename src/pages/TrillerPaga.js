import { useEffect, useState } from 'react';
import axios from 'axios';
import MoviesCard from '../companents/MovieCard'; 

import './main.scss';

const TrillerPage = () => {

    const [trillerList, setTrillerList] = useState({
        isFatched: false,
        data: [],
        error: null
    });

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/upcoming?page=2', {
            params: {
              api_key: '8d08d31e1b08de961a19e2ae293de867'
            }
          })
          .then(function (response) {
            setTrillerList({
                isFetched: true,
                data: response.data.results,
                error: false
            })
          })
          .catch(function (error) {
            setTrillerList({
                isFetched: true,
                data: [],
                error: error
            })
          })
    }, []);

    console.log(trillerList.data)

    return (
        <div className="main">
            {
                trillerList.isFetched ? (
                    <div className="movies-list">
                        {
                            trillerList.data.map((item, index) => (
                                <MoviesCard
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

export default TrillerPage;