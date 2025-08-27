import Movie from "./Movie";

export default function MovieList({ movies, handleSelectId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie handleSelectId={handleSelectId} movie={movie} />
      ))}
    </ul>
  );
}
