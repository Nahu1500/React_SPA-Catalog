import { useParams, Link, useLocation } from "react-router-dom";
import { useItemDetail } from "../hooks/useItemDetail";
import { CharacterDetail } from "../components/CharacterDetail";
import type { ItemRouteParams } from "../types/routing.types";

export default function DetailPage() {
  const { id } = useParams<ItemRouteParams>();
  const location = useLocation();
  const backPath = (location.state as { from: string } | null)?.from ?? "/";
  const { data: character, loading, error } = useItemDetail(id);

  if (loading) {
    return (
      <main className="main-content">
        <div className="loading">Cargando personaje...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="main-content">
        <div className="error-message">
          <p>{error}</p>
          <Link to={backPath} className="back-link">← Volver</Link>
        </div>
      </main>
    );
  }

  if (!character) {
    return (
      <main className="main-content">
        <div className="no-results">
          <p>Personaje no encontrado.</p>
          <Link to={backPath} className="back-link">← Volver</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="main-content detail-page">
      <CharacterDetail character={character} backPath={backPath} />
    </main>
  );
}
