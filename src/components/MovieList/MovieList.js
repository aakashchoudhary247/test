import React from "react";
import "./movielist.css";
import { Link } from "react-router-dom";
import Favourites, { AddedToFavourites } from "../Favourites/Favourites";

const MovieList = (props) => {
  const { movies, handleClick, flag } = props;
  return (
    <>
      <div className="heading">
        {flag === 0 ? "Popular Movies" : "Favourite Movies"}
      </div>
      <div className="movielist-wrapper">
        {movies?.map((movie) => {
          const movieFavourites = JSON.parse(
            localStorage.getItem("favourite-movies")
          );
          const isPresent = movieFavourites?.some((obj) => {
            // Compare the objects based on your criteria
            return obj.id === movie.id;
          });
          return (
            <div className="movielist-container" key={movie?.id}>
              <div className="img-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt="movie"
                  width={250}
                  height={250}
                />
              </div>
              {!isPresent && (
                <div
                  onClick={() => handleClick(movie)}
                  className="favourites-overlay"
                >
                  <Favourites flag={flag} />
                </div>
              )}
              {isPresent && flag === 1 && (
                <div
                  onClick={() => handleClick(movie)}
                  className="favourites-overlay"
                >
                  <Favourites flag={flag} />
                </div>
              )}
              {isPresent && flag === 0 && (
                <div
                  className="favourites-overlay"
                >
                  <AddedToFavourites />
                </div>
              )}
              <Link to={`movie/${movie.id}`}>
                <div class="view-more-btn">View More</div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
