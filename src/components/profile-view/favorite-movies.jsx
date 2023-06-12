import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap";

export const FavoriteMovies({ movies, onAddFavorite, onRemoveFavorite }) {

  
  let favorites = JSON.parse(localStorage.getItem("user")).FavoriteMovies;
  return (
    <div>
      <h2>Favorite Movies</h2>
      {movies && movies.filter(movie => favorites.includes(movie._id)).map((movie) => (
          <div key={movie._id}>
            <img src={movie.ImageUrl} />
            <Link to={`/movies/${movie._id}`}>
              <h4>{movie.Title}</h4>
            </Link>
            <button variant="secondary" onClick={() => removeFav(movies._id)}>
              Remove from favorites
            </button>
          </div>
        ))}
    </div>
  )}