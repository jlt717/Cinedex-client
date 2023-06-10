import React from "react";
//import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./movie-view.scss";

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();

  const movie = movies.find((b) => b.id === movieId);

  return (
    <div>
      <div>
        <img className="w-100" src={movie.ImageURL} />
      </div>
      <div>
        <span>Title: </span>
        <span>{movie.Title}</span>
      </div>
      <div>
        <span>Released: </span>
        <span>{movie.Released}</span>
      </div>
      <div>
        <span>Description: </span>
        <span>{movie.Description}</span>
      </div>
      <div>
        <span>Genre: </span>
        <span>{movie.Genre.Name}</span>
      </div>
      <div>
        <span>Director: </span>
        <span>{movie.Director.Name}</span>
      </div>
      <div>
        <span>Featured: </span>
        <span>{movie.Featured}</span>
      </div>
      <Link to={`/`}>
        <button className="back-button">Back</button>
      </Link>
    </div>
    //   <button onClick={onBackClick}>Back</button>
    // </div>
  );
};
// MovieView.propTypes = {
//   movie: PropTypes.shape({
//     ImageURL: PropTypes.string.isRequired,
//     Title: PropTypes.string.isRequired,
//     Released: PropTypes.string.isRequired,
//     Description: PropTypes.string.isRequired,
//     Genre: PropTypes.shape({
//       Name: PropTypes.string.isRequired
//     }),
//     Director: PropTypes.shape({
//       Name: PropTypes.string.isRequired
//     }),
//     Featured: PropTypes.string.isRequired
//   }).isRequired,
//   onBackClick: PropTypes.func.isRequired
// };
