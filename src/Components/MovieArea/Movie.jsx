import { useState } from "react";
import "./Movie.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";

Movie.propTypes = {
  movie: PropTypes.object,
};

function Movie({ movie }) {
  const [onHover, setOnHover] = useState(false);
  return (
    <div className="movie">
      <div
        className={`movie_poster ${onHover && "movie_poster_hovered"}`}
        onMouseOver={() => setOnHover(true)}
        onMouseLeave={() => setOnHover(false)}
      >
        <LazyLoadImage
          src={movie.title.primaryImage.imageUrl}
          alt={movie.title?.originalTitleText.text}
        ></LazyLoadImage>
      </div>
      <div className="movie_title">
        {movie.title?.originalTitleText.text.slice(0, 20)}
      </div>
      <div className="movie_release_year">{movie.title?.releaseYear.year}</div>
    </div>
  );
}

export default Movie;
