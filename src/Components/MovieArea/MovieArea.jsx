import "./MovieArea.css";
import Movie from "./Movie";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

MovieArea.propTypes = {
  currentActive: PropTypes.object,
  searchFilter: PropTypes.string,
};

function MovieArea({ currentActive, searchFilter }) {
  const [displayArray, setDisplayArray] = useState([]);
  useEffect(() => {
    if (currentActive) setDisplayArray([...currentActive]);
  }, [currentActive]);
  useEffect(() => {
    setDisplayArray(
      currentActive?.filter((elem) =>
        elem.title?.originalTitleText.text
          .toLowerCase()
          .includes(searchFilter?.toLowerCase())
      )
    );
  }, [searchFilter, currentActive]);
  return (
    <div className="movie_area">
      {displayArray?.map((elem, index) => {
        return <Movie movie={elem} key={index} />;
      })}
    </div>
  );
}

export default MovieArea;
