import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GenreProvider } from "./components/Context"; // Assurez-vous que le chemin est correct

import "./App.css";
import Movies from "./Pages/Movies";
import Home from "./components/Home";
import MoviesDetail from "./Pages/MoviesDetails";
import MoviesProvider from "./Pages/MoviesProvider";
import Similar from "./Pages/Similar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GenreProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviesdetail/:id" element={<MoviesDetail />} />
          <Route path="/movie/:id/watchon" element={<MoviesProvider />} />
          <Route path="/movie/:id/trailer" element={<MoviesDetail />} />
          <Route path="/movies/:id/similar" element={<Similar />} />
        </Routes>
        <Footer />
      </GenreProvider>
    </Router>
  );
}

export default App;
