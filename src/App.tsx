import React from "react";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import WatchListPage from "./pages/WatchListPage";
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
