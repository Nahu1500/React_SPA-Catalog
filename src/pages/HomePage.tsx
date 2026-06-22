import { useState } from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";
import { GridResultados } from "../components/GridResultados";
import Pagination from "../components/Pagination";
import { useFetch } from "../hooks/useFetch";
import { buildCharacterListUrl } from "../utils/api";
import type { ApiListResponse, ItemSummary } from "../types/api.types";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);

  const url = buildCharacterListUrl(query.trim() || undefined, currentPage);

  const { data, loading } = useFetch<ApiListResponse<ItemSummary>>(url);

  const characters = data?.results ?? [];
  const totalPages = data?.info?.pages ?? 1;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(searchTerm);
    setCurrentPage(1);
  };

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <>
      <Header title="Rick and Morty Characters" />
      <main className="main-content">
        <Search
          searchTerm={searchTerm}
          onSearchChange={handleSearchChange}
          onSearchSubmit={handleSearchSubmit}
        />
        <GridResultados characters={characters} isLoading={loading} />
        {!loading && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </main>
    </>
  );
}
