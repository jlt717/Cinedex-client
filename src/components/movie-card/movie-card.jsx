import PropTypes from "prop-types";
import { Container, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({
  isFavorite,
  movie,
  addMovieToFavorites,
  deleteFromFavorites,
}) => {
  return (
    <Container>
      <Card
        className="h-100"
        style={{
          backgroundColor: "#1F2833",
          color: "#C5C6C7",
          border: "none",
        }}
      >
        <Card.Img
          variant="top"
          className="img-thumbnail"
          src={movie.ImageURL}
        />
        <Card.Body className="h-100" d-flex flex-column>
          <Card.Title
            style={{ color: "#66FCF1", fontSize: "24px", textAlign: "center" }}
          >
            {movie.Title}{" "}
          </Card.Title>
          <Card.Text style={{ fontSize: "14px", textAlign: "center" }}>
            {movie.Description}
          </Card.Text>
          <Link to={`/movies/${encodeURIComponent(movie.Title)}`}>
            <Button variant="primary">Details</Button>
          </Link>
          {isFavorite ? (
            <Button
              style={{ backgroundColor: "#1F2833", color: "#66FCF1" }}
              onClick={() => {
                deleteFromFavorites(movie._id);
                alert("Remove from favorites");
              }}
            >
              Remove from Favorites
            </Button>
          ) : (
            <Button
              variant="secondary"
              onClick={() => addMovieToFavorites(movie._id)}
            >
              Add to Favorites
            </Button>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImageURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
  }).isRequired,
  addMovieToFavorites: PropTypes.func.isRequired,
};
