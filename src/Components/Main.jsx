import { useState } from "react";
import MovieListBox from "./MovieListBox";
import MovieWatchedBox from "./MovieWatchedBox";

export default function Main({ movies }) {
  return (
    <main className="main">
      <MovieListBox movies={movies} />
      <MovieWatchedBox movies={movies} />
    </main>
  );
}
