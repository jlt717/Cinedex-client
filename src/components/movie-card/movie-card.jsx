import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.ImageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Released}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie._id)}`}>
          <Button variant="link">Open</Button>
        </Link>
        {/* <Button onClick={() => onMovieClick(movie)} variant="link">
          Open
        </Button> */}
      </Card.Body>
    </Card>
    // <div
    //   onClick={() => {
    //     onMovieClick(movie);
    //   }}
    // >
    //   {movie.Title}
    // </div>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImageURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
  }).isRequired,
  //onMovieClick: PropTypes.func.isRequired
};
