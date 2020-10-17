import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from "axios";
import "../App.css";

export default function DiscoverMoviesPage() {
  const params = useParams();
  const [searchText, setSearchText] = useState(params.query || "");
  const [movies, setMovies] = useState({ status: "idle", data: [] });
  const history = useHistory();

  console.log("What are params", params);

  useEffect(() => {
    if (params.query === undefined || params.query === "") {
      return;
    }

    async function fetchData() {
      console.log("Start searching for:", searchText);
      setMovies({ status: "Searching", data: [] });

      const queryParam = encodeURIComponent(searchText);
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?s=${queryParam}&apikey=24820c3b`
        );
        console.log("Succes:", response.data.Search);

        if (response.data.Response === "False") {
          setMovies({
            status: "error",
            data: [],
            message: response.data.Error,
          });
        } else {
          setMovies({ status: "success", data: response.data.Search });
        }
      } catch (error) {
        setMovies({
          status: "error",
          data: [],
          message: error.message,
        });
      }
      setSearchText(params.query);
    }
    fetchData();
  }, [params.query]);

  function search() {
    history.push(`discover/${searchText}`);
  }

  console.log(movies);

  return (
    <div>
      <h1>Discover movies</h1>
      <p>
        <input
          className="searchBar"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button onClick={search} className="searchButton">
          Search
        </button>
      </p>
      <div>
        {movies.data.map((movie) => {
          return (
            <div className="movies" key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>
                <h3>{movie.Title}</h3>
              </Link>
              <img className="image" src={movie.Poster} alt={movie.Title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
