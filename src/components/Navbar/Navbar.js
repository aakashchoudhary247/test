import React from "react";
import Searchbox from "../Searchbar/Searchbar";
import "./navbar.css";

const Navbar = (props) => {
  const { setSearchValue, searchValue, searchMovies, resetMovies } = props;
  return (
    <div className="navbar-container">
      <div className="heading">Movies</div>
      <div>
        <Searchbox
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          searchMovies={searchMovies}
          resetMovies={resetMovies}
        />
      </div>
    </div>
  );
};

export default Navbar;
