import React from "react";

interface SearchProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Search: React.FC<SearchProps> = ({
  searchTerm,
  onSearchChange,
  onSearchSubmit,
}) => {
  return (
    <form className="search-form" onSubmit={onSearchSubmit}>
      <input
        type="text"
        placeholder="Buscar personaje..."
        value={searchTerm}
        onChange={onSearchChange}
        className="search-input"
      />
      <button type="submit" className="search-button">
        Buscar
      </button>
    </form>
  );
};
