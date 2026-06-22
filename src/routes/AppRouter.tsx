import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import FavoritesPage from "../pages/FavoritesPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailPage />} />
        <Route path="/favoritos" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
