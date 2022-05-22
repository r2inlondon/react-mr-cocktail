import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../components/HomePage";
import NotFoundPage from "../components/NotFoundPage";
import AddCocktailPage from "../components/AddCocktailPage";
// import EditCocktailPage from "../components/EditCocktailPage";
import ShowCocktail from "../components/ShowCocktail";
import { AnimatePresence } from "framer-motion/dist/framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/create" element={<AddCocktailPage />} />
        {/* <Route path="/edit/:id" element={<EditCocktailPage />} /> */}
        <Route path="/edit/:id" element={<ShowCocktail />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
