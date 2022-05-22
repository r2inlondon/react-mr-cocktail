import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop>
        <AnimatedRoutes />
      </ScrollToTop>
      <Footer />
    </Router>
  );
}

export default App;
