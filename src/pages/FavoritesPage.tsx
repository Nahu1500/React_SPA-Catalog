import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { CardItem } from "../components/CardItem";
import Pagination from "../components/Pagination";
import { useFavorites } from "../hooks/useFavorites";

const ITEMS_PER_PAGE = 20;

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
    setCurrentPage(1);
  };

  const filtered = searchTerm.trim()
    ? favorites.filter((fav) =>
        fav.name.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : favorites;

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <>
      <Header title="Mis Favoritos" />
      <main className="main-content">
        {favorites.length === 0 ? (
          <div className="no-results">
            <p>No tienes personajes favoritos todavía.</p>
            <Link to="/" className="back-link">Explorar personajes</Link>
          </div>
        ) : (
          <>
            <div style={{ marginBottom: 30 }}>
              <input
                type="text"
                className="search-input"
                placeholder="Filtrar favoritos..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            {filtered.length === 0 ? (
              <div className="no-results">
                <p>No hay favoritos que coincidan con "{searchTerm}".</p>
              </div>
            ) : (
              <>
                <section className="grid-resultados">
                  {visibleItems.map((character) => (
                    <CardItem key={character.id} character={character} />
                  ))}
                </section>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              </>
            )}
          </>
        )}
      </main>
    </>
  );
}
