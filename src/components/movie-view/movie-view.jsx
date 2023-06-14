import React from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const MovieView = () => {
  const { movieTitle } = useParams();
  const [movie, setMovie] = React.useState(undefined);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      return;
    }

    fetch(`https://cinedex.herokuapp.com/movies/${movieTitle}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieTitle]);

  if (!movie) {
    return <div>Loading...</div>;
  }

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
      {movie.Featured && (
        <div>
          <span>Featured: </span>
          <span>Is Featured</span>
        </div>
      )}
      <Link to={`/`}>
        <Button variant="link">Back</Button>
      </Link>
    </div>
  );
};
MovieView.propTypes = {
  // movie: PropTypes.shape({
  //   ImageURL: PropTypes.string.isRequired,
  //   Title: PropTypes.string.isRequired,
  //   Released: PropTypes.string.isRequired,
  //   Description: PropTypes.string.isRequired,
  //   Genre: PropTypes.shape({
  //     Name: PropTypes.string.isRequired,
  //   }),
  //   Director: PropTypes.shape({
  //     Name: PropTypes.string.isRequired,
  //   }),
  //   Featured: PropTypes.string.isRequired,
  // }).isRequired,
  // onBackClick: PropTypes.func.isRequired,
};
