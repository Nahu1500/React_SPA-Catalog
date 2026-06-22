import type { ItemSummary } from "../types/api.types";
import { CardItem } from "./CardItem";

interface GridResultadosProps {
  characters: ItemSummary[];
  isLoading: boolean;
}

export const GridResultados: React.FC<GridResultadosProps> = ({
  characters,
  isLoading,
}) => {
  return isLoading ? (
    <div className="loading">Cargando personajes...</div>
  ) : !characters.length ? (
    <div className="no-results">
      No se encontraron personajes. Intenta con otra búsqueda.
    </div>
  ) : (
    <section className="grid-resultados">
      {characters.map((character) => (
        <CardItem key={character.id} character={character} />
      ))}
    </section>
  );
};
