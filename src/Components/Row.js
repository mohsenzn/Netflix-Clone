import React, { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
const baseImgUrl = "https://image.tmdb.org/t/p/original";


const Row = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  useEffect(() => {
    const getMovie = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
    };

    getMovie();
  }, [fetchUrl]);
  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key);
    }
  };
  return (
    <div className="row">
      {/* Title */}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* serval row posters */}
       
          {movies.map((movie) => (
            <img
              src={`${baseImgUrl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />

          ))}

      </div>
      {trailerUrl && <YouTube videId={trailerUrl} opts={opts}/>}
      {/* container  -> posters*/}
    </div>
  );
};

export default Row;
