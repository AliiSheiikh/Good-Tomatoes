export default function MovieDetails({ selectedId, handleCloseMovie }) {
  return (
    <div className="details">
      <button className="btn-back" onClick={handleCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
}
