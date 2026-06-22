export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL,
} as const;

export function buildCharacterListUrl(name?: string, page?: number): string {
  const params = new URLSearchParams();
  if (name) params.set("name", name);
  if (page !== undefined) params.set("page", String(page));
  const qs = params.toString();
  return `${API_CONFIG.BASE_URL}/character${qs ? `/?${qs}` : ""}`;
}

export function buildCharacterDetailUrl(id: number | string): string {
  return `${API_CONFIG.BASE_URL}/character/${id}`;
}
