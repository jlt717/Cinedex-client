import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Button, Col } from "react-bootstrap";

export const FavoriteMovies = ({ favoriteMovies, deleteFromFavorites }) => {
  console.log(favoriteMovies);
  return (
    <Row>
      <h2>Favorite Movies</h2>
      {favoriteMovies.map((movie) => (
        <Col md={2} key={movie._id}>
          <div>
            <img src={movie.ImageURL} className="img-fluid" />
          </div>
          <Link to={`/movies/${movie.Title}`}>
            <h4>{movie.Title}</h4>
          </Link>
          <button
            variant="secondary"
            onClick={() => deleteFromFavorites(movie._id)}
          >
            Remove from favorites
          </button>
        </Col>
      ))}
    </Row>
  );
};
