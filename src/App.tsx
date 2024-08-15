import React from "react";
import HomePage from "./Page/HomePage";
import MovieDetailPage from "./Page/MovieDetailPage";
import WatchListPage from "./Page/WatchListPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="moviedetail" element={<MovieDetailPage />} />
        <Route path="watchlist" element={<WatchListPage />} />
      </Routes>
      <HomePage />
    </div>
  );
}

export default App;
