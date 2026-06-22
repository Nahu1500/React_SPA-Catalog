import { Link } from "react-router-dom";
import type { Character } from "../types/character";
import { useFavorites } from "../hooks/useFavorites";

interface CharacterDetailProps {
  character: Character;
  backPath: string;
}

export const CharacterDetail: React.FC<CharacterDetailProps> = ({ character, backPath }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const fav = isFavorite(character.id);

  const handleToggleFavorite = () => {
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
    <>
      <Link to={backPath} className="back-link">← Volver</Link>
      <article className="detail-card">
        <img
          src={character.image}
          alt={character.name}
          className="detail-image"
        />
        <div className="detail-content">
          <div className="detail-title-row">
            <h1 className="detail-title">{character.name}</h1>
            <button
              className={`favorite-btn favorite-btn--large ${fav ? "favorite-btn--active" : ""}`}
              onClick={handleToggleFavorite}
              aria-label={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
            >
              {fav ? "★" : "☆"}
            </button>
          </div>
          <dl className="detail-info">
            <dt>Estado</dt>
            <dd>{character.status}</dd>
            <dt>Especie</dt>
            <dd>{character.species}</dd>
            <dt>Tipo</dt>
            <dd>{character.type || "—"}</dd>
            <dt>Género</dt>
            <dd>{character.gender}</dd>
            <dt>Origen</dt>
            <dd>{character.origin.name}</dd>
            <dt>Ubicación</dt>
            <dd>{character.location.name}</dd>
            <dt>Cant. episodios</dt>
            <dd>{character.episode.length}</dd>
          </dl>
        </div>
      </article>
    </>
  );
};
