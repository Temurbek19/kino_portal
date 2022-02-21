import {Link} from 'react-router-dom';

import './MovieCard.scss';

const MovieCard = ({imgLink, title, vote, releaseDate, id}) => {
    return (
    <div className="movie-card">
        <div className="card-image">
          <Link to={`/movie/${id}`} className="play"></Link>
          <img src={`https://image.tmdb.org/t/p/w500/${imgLink}`} alt="" className="card-img"/>
        </div>
        <Link className="card-title">{title}</Link>
        <h4 className="release_date">{releaseDate}</h4>
        <Link to={`/movie/${id}`} className="card-btn">More Info</Link>
        <span className="vote-average">{vote}</span>
      </div>
    )
}

export default MovieCard;