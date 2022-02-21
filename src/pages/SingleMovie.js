import { useEffect, useState } from "react";
import axios from "axios";

import "./main.scss";

const SingleMovie = ({ match }) => {
  const [moviesInfo, setMoviesInfo] = useState({
    isFetched: false,
    data: [],
    error: null,
  });

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${match.params.id}`, {
        params: {
          api_key: "8d08d31e1b08de961a19e2ae293de867",
        },
      })
      .then(function (response) {
        setMoviesInfo({
          isFetched: true,
          data: response.data,
          error: false,
        });
      })
      .catch(function (error) {
        setMoviesInfo({
          isFetched: true,
          data: [],
          error: error,
        });
      });
  }, [match.params.id]);

  return (
    <>
      {moviesInfo.isFetched ? (
        <div className="movie-info">
          <img
            className="back-img"
            src={`https://image.tmdb.org/t/p/w500/${moviesInfo.data.backdrop_path}`}
            alt=""
          />
          <div className="movie-info-frond">
            <img
              className="frond-img"
              src={`https://image.tmdb.org/t/p/w500/${moviesInfo.data.poster_path}`}
              alt=""
            />
            <div className="info-frond-right">
              <h2>{moviesInfo.data.title}</h2>
              <h3>{moviesInfo.data.original_title}</h3>
              <h3>{moviesInfo.data.overview}</h3>
              <h4>Runtime: {moviesInfo.data.runtime}min</h4>
              <h4>Release_date: {moviesInfo.data.release_date}</h4>
              <h4>Budget: ${moviesInfo.data.budget}</h4>

              <a className="official-site" href={moviesInfo.data.homepage}>
                Official site
              </a>
            </div>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default SingleMovie;
