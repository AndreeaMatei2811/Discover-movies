import React, { useState } from "react";
import axios from "axios";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movies, setMovies] = useState({ status: "idle", data: [] });

  const search = async () => {
    console.log("Start searching for:", searchText);
    setMovies({ status: "Searching", data: [] });

    const queryParam = encodeURIComponent(searchText);

    const response = await axios.get(
      `http://www.omdbapi.com/?s=${queryParam}&apikey=24820c3b&`
    );
    console.log("Succes:", response.data.Search);
    setMovies({ status: "Succes", data: response.data.Search });
  };
  console.log(movies);

  return (
    <div>
      <h1>Discover movies</h1>
      <p>
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      {movies.data.map((movie) => {
        return (
          <div>
            <h3>{movie.Title}</h3>
            <h4>{movie.Year}</h4>
            <img src={movie.Poster} alt={movie.Title} />
          </div>
        );
      })}
    </div>
  );
}
