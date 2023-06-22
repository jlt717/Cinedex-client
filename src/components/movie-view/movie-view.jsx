import React from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const MovieView = () => {
  const { movieTitle } = useParams();
  const [movie, setMovie] = React.useState(undefined);

  React.useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (!storedToken) {
      return;
    }

    fetch(`https://cinedex.herokuapp.com/movies/${movieTitle}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [movieTitle]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <img
          className="w-50"
          style={{ alignItem: "center" }}
          src={movie.ImageURL}
        />
      </div>
      <div>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>Title: </span>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>
          {movie.Title}
        </span>
      </div>
      <div>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>Released: </span>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>{movie.Released}</span>
      </div>
      <div>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>Description: </span>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>{movie.Description}</span>
      </div>
      <div>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>Genre: </span>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>{movie.Genre.Name}</span>
      </div>
      <div>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>Director: </span>
        <span style={{ color: "#c5c6c7", fontSize: "18px" }}>{movie.Director.Name}</span>
      </div>
      <Link to={`/`}>
        <Button className="mt-4" variant="primary">Back</Button>
      </Link>
    </div>
  );
};
MovieView.propTypes = {};
