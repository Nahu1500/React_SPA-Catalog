export interface FavoriteItem {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  type: string;
  location: { name: string; url: string };
  origin: { name: string; url: string };
  episode: string[];
  url: string;
  created: string;
}

export interface FavoritesContextValue {
  favorites: FavoriteItem[];
  isFavorite: (id: FavoriteItem["id"]) => boolean;
  addFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: FavoriteItem["id"]) => void;
  toggleFavorite: (item: FavoriteItem) => void;
}
