import { Link, useLocation } from "react-router-dom";
import type { ItemSummary } from "../types/api.types";
import { useFavorites } from "../hooks/useFavorites";

interface CardItemProps {
  character: ItemSummary;
}

export const CardItem: React.FC<CardItemProps> = ({ character }) => {
  const location = useLocation();
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(character.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite({
      id: character.id,
      name: character.name,
      image: character.image,
      species: character.species,
      status: character.status,
      gender: character.gender,
      type: character.type,
      location: character.location,
      origin: character.origin,
      episode: character.episode,
      url: character.url,
      created: character.created,
    });
  };

  return (
    <Link to={`/item/${character.id}`} className="card-item-link" state={{ from: location.pathname }}>
      <article className="card-item">
        <img src={character.image} alt={character.name} className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{character.name}</h2>
          <p className="card-info">
            <strong>Especie:</strong> {character.species}
          </p>
          <p className="card-info">
            <strong>Estado:</strong> {character.status}
          </p>
          <p className="card-info">
            <strong>Género:</strong> {character.gender}
          </p>
          <p className="card-info">
            <strong>Ubicación:</strong> {character.location.name}
          </p>
          <p className="card-info">
            <strong>Origen:</strong> {character.origin.name}
          </p>
          <button
            className={`favorite-btn ${fav ? "favorite-btn--active" : ""}`}
            onClick={handleToggleFavorite}
            aria-label={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
          >
            {fav ? "★" : "☆"}
          </button>
        </div>
      </article>
    </Link>
  );
};
