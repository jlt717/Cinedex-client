import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { Row, Col } from "react-bootstrap";
import { DateTime } from "luxon";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser);
  const [token, setToken] = useState(storedToken);
  const [movies, setMovies] = useState([]);
  //this stores the result of the onSearch function
  const [filteredSearchMovieResults, setFilteredSearchMovieResults] = useState(
    []
  );
  //This stores what the user is typing
  const [searchKeyword, setSearchKeyword] = useState("");
  const movieList =
    filteredSearchMovieResults.length > 0 ? filteredSearchMovieResults : movies;

  useEffect(() => {
    if (!token) {
      return;
    }
    getUser();
    getMovies();
  }, [token]);

  useEffect(() => {
    //This listens for when the input field is
    // empty and sets filtered to and empty array
    // to enable render of all movies.
    if (searchKeyword.trim().length === 0) {
      setFilteredSearchMovieResults([]);
    }
    //the [searchKeyword] is the listener
  }, [searchKeyword]);

  function onSearch() {
    //Check if the input field is empty and
    //sets the filtered to an empty array so
    // the full movies can show
    if (searchKeyword.trim().length === 0) {
      setFilteredSearchMovieResults([]);
      return;
    }

    //filters the movie array by checking if
    // the keywords is what the movie title starts with or ends with
    const foundMovies = movies.filter((movie) => {
      return (
        movie.Title.toLowerCase().startsWith(searchKeyword.toLowerCase()) ||
        movie.Title.toLowerCase().endsWith(searchKeyword.toLowerCase())
      );
    });

    //if foundmovies has an item in it then we add it to the
    // filtered array
    if (foundMovies.length > 0) {
      setFilteredSearchMovieResults(foundMovies);
      return;
    }

    setFilteredSearchMovieResults([]);
  }

  function getMovies() {
    fetch("https://cinedex.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data);
      });
  }

  function getUser() {
    fetch(`https://cinedex.herokuapp.com/users/`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("getuser: ", user);
        setUser({
          ...user,
          Birthday: DateTime.fromISO(user.Birthday).toFormat("yyyy-MM-dd"),
        });
        localStorage.setItem("user", JSON.stringify(user));
      });
  }

  function addToFavorites(movieId) {
    fetch(
      `https://cinedex.herokuapp.com/users/${user.Username}/movies/${movieId}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (response.ok) {
          getUser();
          alert("Movie added to favorites list");
        } else {
          alert("Movie was not added to favorites list");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

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
          getUser();
          alert("Movie deleted from favorites list");
        } else {
          alert("Movie was not deleted from favorites list");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  function onLoggedIn(user, token) {
    setToken(token);
    setUser(user);
  }

  function onLoggedOut() {
    setUser(null);
    setToken(null);
    localStorage.clear();
  }

  return (
    <BrowserRouter>
      <NavigationBar
        onSearch={onSearch}
        onEnterKeyword={setSearchKeyword}
        user={user}
        onLoggedOut={onLoggedOut}
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
                  <LoginView onLoggedIn={onLoggedIn} />
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
              ) : (
                <ProfileView
                  user={user}
                  getUser={getUser}
                  onLoggedOut={onLoggedOut}
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
                <>
                  <Row>
                    {movieList.map((movie) => (
                      <Col className="mb-4" key={movie._id} md={3}>
                        <MovieCard
                          movie={movie}
                          isFavorite={(user?.FavoriteMovies).find(
                            (mov) => mov._id === movie._id
                          )}
                          addMovieToFavorites={addToFavorites}
                          deleteFromFavorites={deleteFromFavorites}
                        />
                      </Col>
                    ))}
                  </Row>
                </>
              )}
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
