/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useEffect, useCallback, type ReactNode } from "react";
import type { FavoriteItem, FavoritesContextValue } from "../types/favorites.types";

const STORAGE_KEY = "favorites";

function loadInitialFavorites(): FavoriteItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return [];
    return JSON.parse(raw) as FavoriteItem[];
  } catch {
    return [];
  }
}

export const FavoritesContext = createContext<FavoritesContextValue | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(loadInitialFavorites);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const isFavorite = useCallback(
    (id: FavoriteItem["id"]) => favorites.some((fav) => fav.id === id),
    [favorites],
  );

  const addFavorite = useCallback((item: FavoriteItem) => {
    setFavorites((prev) => [...prev, item]);
  }, []);

  const removeFavorite = useCallback((id: FavoriteItem["id"]) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  }, []);

  const toggleFavorite = useCallback(
    (item: FavoriteItem) => {
      setFavorites((prev) => {
        const exists = prev.some((fav) => fav.id === item.id);
        return exists
          ? prev.filter((fav) => fav.id !== item.id)
          : [...prev, item];
      });
    },
    [],
  );

  const value: FavoritesContextValue = {
    favorites,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
