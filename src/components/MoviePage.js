import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function MoviePage() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({
    status: "idle",
    data: null,
  });

  useEffect(() => {
    async function fetchDetails() {
      setMovieDetails({ status: "Searching", data: {} });

      const queryParam = encodeURIComponent(params.imdbID);
      console.log("What are movie details", movieDetails);
      console.log("What is this", queryParam);

      const response = await axios.get(
        `https://www.omdbapi.com/?i=${queryParam}&apikey=24820c3b`
      );
      console.log(response);

      setMovieDetails({ status: "succes", data: response.data });
    }
    fetchDetails();
  }, [params.imdbID]);

  console.log("WHAT ARE PARAMS:", params);

  return (
    <div className="movies">
      <h2>
        {movieDetails.data?.Title} ({movieDetails.data?.Year})
      </h2>
      <h3>Rating: {movieDetails.data?.imdbRating}</h3>
      <img
        className="image"
        src={movieDetails.data?.Poster}
        alt={movieDetails.data?.Title}
      />

      <p>{movieDetails.data?.Plot}</p>
    </div>
  );
}
