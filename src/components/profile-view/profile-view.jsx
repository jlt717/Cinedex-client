import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
//import { MainView } from "../main-view/main-view";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DateTime } from "luxon";
// import "./profile-view.scss";
import { UserInfo } from "./user-info";
import { FavoriteMovies } from "./favorite-movies";
import { UpdateUser } from "./update-user";

export const ProfileView = ({ movies, deleteFromFavorites }) => {
  const [user, setUser] = useState({
    Username: "",
    Password: "",
    FavoriteMovies: [],
    Email: "",
    Birthday: "",
  });

  const [userToUpdate, setUserToUpdate] = useState({
    Username: "",
    Password: "",
    FavoriteMovies: [],
    Email: "",
    Birthday: "",
  });
  //const [favorites, setFavorites] = useState("");
  //const [birthday, setBirthday] = useState("");

  React.useEffect(() => {
    //getUser();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      const data = {
        ...storedUser,
        Birthday: DateTime.fromISO(storedUser.Birthday).toFormat("MM-dd-yyyy"),
      };
      setUserToUpdate(data);
      setUser(data);
    }
  }, []);

  const favoriteMovies = (movies || []).filter((m) =>
    user?.FavoriteMovies.includes(m._id)
  );

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
    });

    function getUser() {
      const getUser = () => {
        const data = {
          Username: user.Username,
          Password: user.Password,
          Email: user.Email,
          Birthday: user.Birthday,
          User_id: user._id,
        };
        fetch(`https://cinedex.herokuapp.com/users/${user.User_id}`, {
          method: "GET",
          //body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              alert("Update was successful");
              //getUser if impl.
              //set response to localStorage...
              // localStorage.setItem("user", JSON.stringify(data.user));
              window.location.reload();
            } else {
              alert("Update unsuccessful");
            }
          })
          .catch((error) => {
            console.error("Error updating user:", error);
          });
      };

      function deleteUser() {
        fetch(`https://cinedex.herokuapp.com/users/${user.Username}`, {
          method: "DELETE",
          //body: JSON.stringify(data),
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

      return (
        <div>
          <Row>
            <Col>
              <UserInfo user={user} />
            </Col>
            <Col>
              <UpdateUser
                user={userToUpdate}
                handleSubmit={updateUser}
                onHandleChange={setUserToUpdate}
              />
            </Col>
          </Row>
          <FavoriteMovies
            favoriteMovies={favoriteMovies}
            onRemoveFavorite={deleteFromFavorites}
          />
        </div>
      );
    }
  }
};
