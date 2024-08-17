import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import { RootState } from "../redux/store";

const MovieList: React.FC = () => {
  const movies = useSelector((state: RootState) => state.search.movies);

  return (
    <div>
      {movies &&
        movies.map((movie: any) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
    </div>
  );
};

export default MovieList;
