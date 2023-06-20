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
      <Link to={`/`}>
        <Button variant="tertiary">Back</Button>
      </Link>
    </div>
  );
};
MovieView.propTypes = {};
