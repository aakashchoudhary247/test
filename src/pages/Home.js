/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import MovieList from "../components/MovieList/MovieList";
import axios from "axios";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const api_key = process.env.REACT_APP_API_KEY;
  const api_url = process.env.REACT_APP_API_URL;
  const search_api_url = process.env.REACT_APP_SEARCH_API_URL;

  const getPopularMovies = async () => {
    const url = `${api_url}?api_key=${api_key}&adult=false`;

    const response = await axios.get(url);

    if (response?.status === 200) {
      setMovieList(response?.data?.results);
    }
  };

  const searchMovies = async (searchValue) => {
    const url = `${search_api_url}?api_key=${api_key}&query=${searchValue}&adult=false`;

    const response = await axios.get(url);

    if (response?.status === 200) {
      setMovieList(response?.data?.results);
    }
  }

  const resetMovies = () => {
    getPopularMovies();
    setSearchValue('');
  }

  useEffect(() => {
    getPopularMovies();
    const movieFavourites = JSON.parse(
      localStorage.getItem("favourite-movies")
    );

    if (movieFavourites) {
      setFavouriteMovies(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourite-movies", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const isPresent = favouriteMovies?.some((obj) => {
      // Compare the objects based on your criteria
      return obj.id === movie.id;
    });
    if (!isPresent) {
      const newFavouriteList = [...favouriteMovies, movie];
      setFavouriteMovies(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    } else {
      alert("Movie Already Present");
    }
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favouriteMovies.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavouriteMovies(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  return (
    <div>
      <Navbar searchValue={searchValue} setSearchValue={setSearchValue} searchMovies={searchMovies} resetMovies={resetMovies} />
      <MovieList movies={movieList} handleClick={addFavouriteMovie} flag={0} />
      {favouriteMovies?.length > 0 && (
        <>
          <br />
          <hr />
          <MovieList
            movies={favouriteMovies}
            handleClick={removeFavouriteMovie}
            flag={1}
          />
        </>
      )}
    </div>
  );
};

export default Home;
