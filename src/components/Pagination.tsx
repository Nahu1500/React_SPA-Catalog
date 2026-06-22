interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function Pagination({ currentPage, totalPages, onPrev, onNext }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="pagination">
      <button
        className="pagination-btn"
        onClick={onPrev}
        disabled={currentPage <= 1}
      >
        ◀ Anterior
      </button>
      <span className="pagination-info">
        Página {currentPage} de {totalPages}
      </span>
      <button
        className="pagination-btn"
        onClick={onNext}
        disabled={currentPage >= totalPages}
      >
        Siguiente ▶
      </button>
    </div>
  );
}
