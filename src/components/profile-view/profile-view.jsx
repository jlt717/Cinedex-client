import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//import { MainView } from "../main-view/main-view";
import { Form, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./profile-view.scss";
import { UserInfo } from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
// import UpdateUser from "./update-user";

export const ProfileView = ({ movies }) => {
  const [user, setUser] = useState(undefined);
  //const [favorites, setFavorites] = useState("");
  //const [birthday, setBirthday] = useState("");

  React.useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const favoriteMovies = (movies || []).filter((m) =>
    user?.FavoriteMovies.includes(m._id)
  );
};

function updateUser() {
  const data = {
    Username: user.Username,
    Password: user.Password,
    Email: user.Email,
    Birthday: user.Birthday,
  };
  fetch(`https://cinedex.herokuapp.com/users/${user.Username}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Update was successful");
        window.location.reload();
      } else {
        alert("Update unsuccessful");
      }
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
}

function deleteUser() {
  fetch(`https://cinedex.herokuapp.com/users/${user.Username}`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      alert("User was deleted");
      window.location.reload();
    } else {
      alert("User was not deleted");
    }
  });
}
function addToFavorites() {
  fetch(`https://cinedex.herokuapp.com/users/:Username/movies/${MovieID}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      alert("Movie added to favorites list");
      window.location.reload();
    } else {
      alert("Movie was not added to favorites list");
    }
  });
}
function deleteFromFavorites() {
  fetch(`https://cinedex.herokuapp.com/users/:Username/movies/${MovieID}`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      alert("Movie deleted from favorites list");
      window.location.reload();
    } else {
      alert("Movie was not deleted from favorites list");
    }
  });
}

// const getUser = () => {};
// const handleSubmit = (e) => {};
// const removeFav = (id) => {};
// const handleUpdate = (e) => {};
// useEffect(() => {}, []);

return (
  <div>
    <UserInfo user={user} />
    <FavoriteMovies
      favoriteMovies={favoriteMovies}
      onRemoveFavorite={() => {}}
    />
    <UpdateUser handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
  </div>
);
