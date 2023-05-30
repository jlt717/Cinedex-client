import React from "react";
import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      image:
        "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
      title: "Eternal Sunshine of the Spotless Mind",
      released: 2004,
      description:
        "After a fight, Joel Barish discovers that his girlfriend, Clementine Kruczynski, has had her memories of him erased by the New York City firm Lacuna. Heartbroken, he decides to undergo the same procedure. In preparation, he records a tape for Lacuna, recounting his memories of their volatile relationship. ",
      director: "Michel Gondry",
      genre: "Drama",
    },
    {
      id: 2,
      image:
        "https://m.media-amazon.com/images/M/MV5BNmJjNTQzMjctMmE2NS00ZmYxLWE1NjYtYmRmNjNiMzljOTc3XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
      title: "Hook",
      released: 1991,
      description:
        "When Captain James Hook kidnaps his children, an adult Peter Pan must return to Neverland and reclaim his youthful spirit in order to challenge his old enemy. This is a sequel to Peter Pan.",
      director: "Steven Spielberg",
      genre: "Adventure",
    },
    {
      id: 3,
      image:
        "https://m.media-amazon.com/images/M/MV5BMjM2MDE4OTQwOV5BMl5BanBnXkFtZTgwNjgxMTg2NzE@._V1_FMjpg_UX1000_.jpg",
      title: "Labyrinth",
      released: 1986,
      description:
        "The film stars Jennifer Connelly as 16-year-old Sarah and David Bowie as Jareth, the Goblin King. In Labyrinth, Sarah embarks on a quest to reach the center of an enormous, otherworldly maze to rescue her infant half-brother Toby, whom she wished away to Jareth during a moment of frustration while babysitting.",
      director: "Jim Henson",
      genre: "Fantasy",
    },
    {
      id: 4,
      image:
        "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg",
      title: "Harry Potter and the Sorcerer's Stone",
      released: 2001,
      description:
        "This story introduces Harry Potter and follows his first year at Hogwarts School of Witchcraft and Wizardry as he discovers that he is a famous wizard and begins his formal wizarding education.",
      director: "Chris Columbus",
      genre: "Fantasy",
    },
    {
      id: 5,
      image:
        "https://m.media-amazon.com/images/I/81PmlArGyfS._AC_UF894,1000_QL80_.jpg",
      title: "Stand by Me",
      released: 1986,
      description:
        "Based on Stephen King's novel, this film revolves around four small-town 12-year-old boys who set out on a trek to find a dead body. They overcome oncoming trains, a disgusting bout with leeches, and the rival advances of a competing gang to collect the prize of locating the body.",
      director: "Rob Reiner",
      genre: "Adventure",
    },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);
  if (selectedMovie) {
    return (
      <MovieView
        movie={selectedMovie}
        onBackClick={() => setSelectedMovie(null)}
      />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }
  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onMovieClick={(newSelectedMovie) => {
            setSelectedMovie(newSelectedMovie);
          }}
        />
      ))}
    </div>
  );
};
