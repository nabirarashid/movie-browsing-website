import React from "react";
import "../css/Favourites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const Favourites = () => {
  const { favourites } = useMovieContext();

  if (favourites) {
    return <div className="favorites">
      <h2>Your Favourite Movies!</h2>
      {/* // same as the one in Home.jsx, but looping over favourites */}
      <div className="movies-grid">
        {favourites.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>;
  }
  
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet</h2>
      <p>Start adding movies to your favorites and they will show here.</p>
    </div>
  );
};

export default Favourites;
