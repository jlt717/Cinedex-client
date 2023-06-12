import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./profile-view.scss";
import UserInfo from "./user-info";
import FavoriteMovies from "./favorite-movies";
import UpdateUser from "./update-user";

export const ProfileView = ({
  user,
  token,
  movies,
  onLoggedOut,
  onRemoveFavorite,
}) => {
  const [user, setUser] = useState("");
  //const [movies, setMovies] = useState("");
  //const [favorites, setFavorites] = useState("");
  //const [birthday, setBirthday] = useState("");

  const data = {
    Username: username,
    Password: password,
    Email: email,
    Birthday: birthday,
  };

  const favoriteMovies = movies.filter((m) =>
    user.FavoriteMovies.includes(m._id)
  );
  const getUser = () => {};
  const handleSubmit = (e) => {};
  const removeFav = (id) => {};
  const handleUpdate = (e) => {};
  useEffect(() => {}, []);
};

return (
  <div>
    <UserInfo name={user.Username} email={user.Email} />
    <FavoriteMovies favoriteMovieList={favoriteMovieList} />
    <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
  </div>
);
