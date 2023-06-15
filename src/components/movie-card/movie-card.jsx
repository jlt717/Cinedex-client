import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MovieCard = ({
  isFavorite,
  movie,
  addMovieToFavorites,
  deleteFromFavorites,
}) => {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.ImageURL} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Released}</Card.Text>
        <Link to={`/movies/${encodeURIComponent(movie.Title)}`}>
          <Button variant="link">Open</Button>
        </Link>
        {isFavorite ? (
          <Button
            variant="danger"
            onClick={() => {
              deleteFromFavorites(movie._id);
              alert("Remove from favorites");
            }}
          >
            Remove from Favorites
          </Button>
        ) : (
          <Button
            variant="danger"
            onClick={() => addMovieToFavorites(movie._id)}
          >
            Add to Favorites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImageURL: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
  }).isRequired,
  addMovieToFavorites: PropTypes.func.isRequired,
};
