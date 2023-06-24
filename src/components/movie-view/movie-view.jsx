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
          className="rounded mx-auto d-block"
          style={{
            width: "400px",
            height: "600px",
            objectFit: "cover",
            paddingTop: "50px",
          }}
          src={movie.ImageURL}
        />
      </div>
      <div>
        <span
          style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
        >
          Title:{" "}
        </span>
        <span
          style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
        >
          {movie.Title}
        </span>
      </div>
      <div>
        <span
          style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
        >
          Released:{" "}
        </span>
        <span
          style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
        >
          {movie.Released}
        </span>
      </div>
      <div>
        <span
          style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
        >
          Description:{" "}
        </span>
        <span
          style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
        >
          {movie.Description}
        </span>
      </div>
      <div>
        <span
          style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
        >
          Genre:{" "}
        </span>
        <span
          style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
        >
          {movie.Genre.Name}
        </span>
      </div>
      <div>
        <span
          style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
        >
          Genre Description:{" "}
        </span>
        <span
          style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
        >
          {movie.Genre.Description}
        </span>
      </div>
      <div>
        <span
          style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
        >
          Director:{" "}
        </span>
        <span
          style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
        >
          {movie.Director.Name}
        </span>
        <div>
          <span
            style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
          >
            Director Bio:{" "}
          </span>
          <span
            style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
          >
            {movie.Director.Bio}
          </span>
        </div>
        <div>
          <span
            style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
          >
            Birthyear:{" "}
          </span>
          <span
            style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
          >
            {movie.Director.Birthyear}
          </span>
        </div>
        <div>
          {/* <span
            style={{ color: "#ffffff", fontSize: "18px", paddingLeft: "150px" }}
          >
            Deathyear:{" "}
          </span>
          <span
            style={{ color: "#45a29e", fontSize: "18px", paddingLeft: "10px" }}
          >
            {movie.Director.Deathyear}
          </span> */}
        </div>
      </div>
      <Link to={`/`}>
        <Button className="mt-4" variant="primary">
          Back
        </Button>
      </Link>
    </div>
  );
};
MovieView.propTypes = {};
