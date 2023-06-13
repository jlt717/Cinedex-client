import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap";

export const FavoriteMovies = ({ favoriteMovies, onRemoveFavorite }) => {
  return (
    <div>
      <h2>Favorite Movies</h2>
      {favoriteMovies.map((movie) => (
        <div key={movie._id}>
          <img src={movie.ImageUrl} />
          <Link to={`/movies/${movie.Title}`}>
            <h4>{movie.Title}</h4>
          </Link>
          <button
            variant="secondary"
            onClick={() => onRemoveFavorite(movies._id)}
          >
            Remove from favorites
          </button>
        </div>
      ))}
    </div>
  );
};
