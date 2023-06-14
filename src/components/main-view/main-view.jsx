import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col } from "react-bootstrap";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }
    getMovies();
  }, [token]);

  function getMovies() {
    fetch("https://cinedex.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data);
      });
  }

  function getUser() {
    fetch(`https://cinedex.herokuapp.com/users/${user._id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
      });
  }

  function addToFavorites(movieId) {
    console.log(token);
    fetch(
      `https://cinedex.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Movie added to favorites list");
        } else {
          alert("Movie was not added to favorites list");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       getUser();
  //       getMovies();
  //     });
  // }

  function deleteFromFavorites(movieId) {
    fetch(
      `https://cinedex.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("Movie deleted from favorites list");
        } else {
          alert("Movie was not deleted from favorites list");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       getUser();
  //       getMovies();
  //     });
  // }

  return (
    <BrowserRouter>
      <NavigationBar
        user={user}
        onLoggedOut={() => {
          setUser(null);
        }}
      />
      <Routes>
        <Route
          path="/signup"
          element={
            <>
              {user ? (
                <Navigate to="/" />
              ) : (
                <Col md={5}>
                  <SignupView />
                </Col>
              )}
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              {user ? (
                <Navigate to="/" />
              ) : (
                <Col md={5}>
                  <LoginView onLoggedIn={(user) => setUser(user)} />
                </Col>
              )}
            </>
          }
        />
        <Route
          path="/movies/:movieTitle"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <Col md={8}>
                  <MovieView />
                </Col>
              )}
            </>
          }
        />
        <Route
          path="/users"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <ProfileView
                  movies={movies}
                  deleteFromFavorites={deleteFromFavorites}
                />
              )}
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              {!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <Col>The list is empty!</Col>
              ) : (
                <Row>
                  {movies.map((movie) => (
                    <Col className="mb-4" key={movie._id} md={3}>
                      <MovieCard
                        movie={movie}
                        addMovieToFavorites={addToFavorites}
                        deleteFromFavorites={deleteFromFavorites}
                      />
                    </Col>
                  ))}
                </Row>
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
