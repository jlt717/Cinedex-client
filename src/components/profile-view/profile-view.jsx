import React, { useEffect, useState } from "react";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import "./profile-view.scss";
import { UserInfo } from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";

export const ProfileView = ({
  user,
  getUser,
  deleteFromFavorites,
  onLoggedOut,
}) => {
  const [userToUpdate, setUserToUpdate] = useState({
    Username: user.Username || "",
    Email: user.Email || "",
    Birthday: user.Birthday || "",
  });

  function updateUser(e) {
    e.preventDefault();
    const data = {
      Username: userToUpdate.Username,
      Password: userToUpdate.Password,
      Email: userToUpdate.Email,
      Birthday: userToUpdate.Birthday,
    };
    fetch(`https://cinedex.herokuapp.com/users/${user.Username}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        getUser();
      });
  }

  function deleteUser() {
    fetch(`https://cinedex.herokuapp.com/users/${user.Username}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        alert("User account was deleted");
        onLoggedOut();
        window.location.reload();
      })
      .catch(() => {
        alert("User account was not deleted");
      });
  }

  return (
    <div>
      <Row className="mt-5">
        <Col>
          <UserInfo user={user} deleteUser={deleteUser} />
          <FavoriteMovies 
            favoriteMovies={user.FavoriteMovies}
            onRemoveFavorite={deleteFromFavorites}
          />
        </Col>
        <Col>
          <UpdateUser
            user={userToUpdate}
            handleSubmit={updateUser}
            onHandleChange={setUserToUpdate}
          />
        </Col>
      </Row>
    </div>
  );
};
