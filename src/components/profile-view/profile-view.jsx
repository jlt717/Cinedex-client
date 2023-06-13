import React, { useEffect, useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./profile-view.scss";
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

//   const data = {
//     Username: username,
//     Password: password,
//     Email: email,
//     Birthday: birthday,
//   };
//   fetch("https://cinedex.herokuapp.com/users/:Username", {
//     method: "PUT",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => {
//     if (response.ok) {
//       alert("Update was successful");
//       window.location.reload();
//     } else {
//       alert("Update unsuccessful");
//     }
//   });
// };

// fetch("https://cinedex.herokuapp.com/users/:Username", {
//   method: "DELETE",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//   },
// }).then((response) => {
//   if (response.ok) {
//     alert("User was deleted");
//     window.location.reload();
//   } else {
//     alert("User was not deleted");
//   }
// });

// fetch("https://cinedex.herokuapp.com/users/:Username/movies/:MovieID", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//   },
// }).then((response) => {
//   if (response.ok) {
//     alert("Movie added to favorites list");
//     window.location.reload();
//   } else {
//     alert("Movie was not added to favorites list");
//   }
// });

// fetch("https://cinedex.herokuapp.com/users/:Username/movies/:MovieID", {
//   method: "DELETE",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//   },
// }).then((response) => {
//   if (response.ok) {
//     alert("Movie deleted from favorites list");
//     window.location.reload();
//   } else {
//     alert("Movie was not deleted from favorites list");
//   }
// });

// const favoriteMovies = movies.filter((m) =>
//   user.FavoriteMovies.includes(m._id)
// );
// const getUser = () => {};
// const handleSubmit = (e) => {};
// const removeFav = (id) => {};
// const handleUpdate = (e) => {};
// useEffect(() => {}, []);

return (
  <div>
    <UserInfo name={user.Username} email={user.Email} />
    <FavoriteMovies favoriteMovieList={favoriteMovieList} />
    <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
  </div>
);
