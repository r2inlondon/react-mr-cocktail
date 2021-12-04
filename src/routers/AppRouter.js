import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import AddCocktailPage from "../components/AddCocktailPage";
import EditCocktailPage from "../components/EditCocktailPage";
import NavBar from "../components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/create" element={<AddCocktailPage />} />
        <Route path="/edit/:id" element={<EditCocktailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
