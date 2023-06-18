import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Button, Col } from "react-bootstrap";

export const FavoriteMovies = ({ favoriteMovies, onRemoveFavorite }) => {
  return (
    <Row>
      <h2 className="my-4" style={{ color: "#66FCF1"}}>Favorite Movies</h2>
      {favoriteMovies.map((movie) => (
        <Col md={4} key={movie._id}>
          <div>
            <img src={movie.ImageURL} className="img-thumbnail" />
          </div>
          <Link
            style={{ color: "#C5C6C7", textAlign: "center" }}
            to={`/movies/${movie.Title}`}
          >
            <h4>{movie.Title}</h4>
          </Link>
          <Button
            className="my-4"
            variant="primary"
            style={{ backgroundColor: "#1F2833", color: "#66FCF1" }}
            onClick={() => onRemoveFavorite(movie._id)}
          >
            Remove from favorites
          </Button>
        </Col>
      ))}
    </Row>
  );
};
