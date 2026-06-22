import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import type { FavoritesContextValue } from "../types/favorites.types";

export function useFavorites(): FavoritesContextValue {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites debe usarse dentro de un <FavoritesProvider>");
  }
  return context;
}
