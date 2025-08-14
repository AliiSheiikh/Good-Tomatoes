import { useState } from "react";
import MovieListBox from "./MovieListBox";
import MovieWatchedBox from "./MovieWatchedBox";

export default function Main({ children }) {
  return <main className="main">{children}</main>;
}
