import React, { useEffect, useState } from "react";
import "./details.css";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DetailComponent = () => {
  const params = useParams();
  const [data, setData] = useState({});

  const getMovieDetail = async () => {
    const url = `https://api.themoviedb.org/3/movie/${params?.id}?api_key=fd6d986e1f4869f25471fb90f1fc58d2`;

    const response = await axios.get(url);

    if (response?.status === 200) {
      console.log(response?.data);
      setData(response?.data);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <>
      <Link to={`/`}>
        <div className="back-btn">Back</div>
      </Link>

      <div className="details">
        <div className="heading">Movie Details</div>
        <div className="movie-details-wrapper">
          <div className="movie-image">
            <img
              src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
              alt="movie"
            />
          </div>
          <div className="movie-details">
            <h2>{data?.original_title}</h2>
            <h4>{data?.tagline}</h4>
            <h5>{data?.overview}</h5>
            {data?.homepage && (
              <h5>
                Home Page:{" "}
                <a href={data?.homepage} target="__blank">
                  {data?.homepage}
                </a>
              </h5>
            )}
            {data?.budget > 0 && <h5>Budget: {data?.budget}</h5>}
            <h5>Runtime: {data?.runtime} mins</h5>
            <h5>Status: {data?.status}</h5>
            {data?.status === "Released" && (
              <h5>Release Data: {data?.release_date}</h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailComponent;
