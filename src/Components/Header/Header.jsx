import { useState } from "react";
import "./Header.css";
import PropTypes from "prop-types";

Header.propTypes = {
  setExpand: PropTypes.func,
  setSearchFilter: PropTypes.func,
};

function Header({ setExpand, setSearchFilter }) {
  const [searchQuery, setSearchQuery] = useState("");
  function handleSearch(e) {
    e.key === "Enter" && console.log("Enter key pressed");
  }
  return (
    <div className="header">
      <div className="expand" onClick={() => setExpand((expand) => !expand)}>
        <i className="fa-regular fa-bars"></i>
      </div>
      <div className="title">Popcorn Club</div>
      <div className="search">
        <input
          type="text"
          placeholder="Search ..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setSearchFilter(e.target.value);
          }}
          onKeyDown={handleSearch}
        />
      </div>
    </div>
  );
}

export default Header;
