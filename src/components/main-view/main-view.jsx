import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import ProfileView from "../profile-view/profile-view";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const MainView = () => {
  // const storedUser = JSON.parse(localStorage.getItem("user"));
  // const storedToken = localStorage.getItem("token");
  // const [user, setUser] = useState(storedUser);
  // const [token, setToken] = useState(storedToken);
  // const [movies, setMovies] = useState([]);
  // //const [selectedMovie, setSelectedMovie] = useState(null);
  // //if (!user) {
  // // setFavoriteMovie(user.FavoriteMovies);
  // // };
  // // if (user) {
  // //   let favoriteMovieList = movies.filter((m) =>
  // //     favoriteMovieList.includes(m._id)
  // //   );
  // // }
  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }
  //   fetch("https://cinedex.herokuapp.com/movies", {
  //     headers: { Authorization: `Bearer ${token}` },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMovies(data);
  //     });
  // }, [token]);

  return <div>Main view</div>;
  // return (
  //   <BrowserRouter>
  //     <NavigationBar
  //       user={user}
  //       onLoggedOut={() => {
  //         setUser(null);
  //       }}
  //     />
  //   </BrowserRouter>
  // );
};

// const addToFavorites = movies.find((movie) => movie.id === movieId);
// console.log("addToFavorites:", addToFavorites);
// const user = JSON.parse(localStorage.getItem("user"));

//           {movies.map((movie) => (
//             <Col className="mb-5" key={movie.Title} md={3}>
//               <MovieCard
//                 movie={movie}
//                 onMovieClick={(newSelectedMovie) => {
//                   setSelectedMovie(newSelectedMovie);
//                 }}
//               />
//             </Col>
//           ))}
//         </>
//       )}
//       <button
//         onClick={() => {
//           setUser(null);
//           setToken(null);
//           localStorage.clear();
//         }}
//       >
//         Logout
//       </button>
//     </Row>
//   );
// };

//   if (!user) {
//     return (
//       <>
//         <LoginView
//           onLoggedIn={(user, token) => {
//             setUser(user);
//             setToken(token);
//           }}
//         />
//         or
//         <SignupView />
//       </>
//     );
//   }

//   if (selectedMovie) {
//     return (
//       <MovieView
//         movie={selectedMovie}
//         onBackClick={() => setSelectedMovie(null)}
//       />
//     );
//   }

//   if (movies.length === 0) {
//     return <div>The list is empty!</div>;
//   }
//   return (
//     <div>
//       {movies.map((movie) => (
//         <MovieCard
//           key={movie.Title}
//           movie={movie}
//           onMovieClick={(newSelectedMovie) => {
//             setSelectedMovie(newSelectedMovie);
//           }}
//         />
//       ))}
// <button
//   onClick={() => {
//     setUser(null);
//     setToken(null);
//     localStorage.clear();
//   }}
// >
//   Logout
// </button>
//     </div>
//   );
// };
