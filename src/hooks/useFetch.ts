import { useState, useEffect } from "react";

export interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>(url: string | null): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (url === null) return;

    let cancelled = false;
    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          signal: abortController.signal,
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const result = (await response.json()) as T;

        if (!cancelled) {
          setData(result);
          setError(null);
        }
      } catch (err: unknown) {
        if (cancelled) return;

        if (err instanceof DOMException && err.name === "AbortError") {
          return;
        }

        const message =
          err instanceof Error ? err.message : "Ocurrió un error inesperado";

        if (!cancelled) {
          setError(message);
          setData(null);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
      abortController.abort();
    };
  }, [url]);

  return { data, loading, error };
}
