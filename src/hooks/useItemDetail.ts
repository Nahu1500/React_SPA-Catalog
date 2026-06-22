import { useFetch } from "./useFetch";
import { buildCharacterDetailUrl } from "../utils/api";
import type { ItemDetail } from "../types/api.types";
import type { UseFetchResult } from "./useFetch";

export function useItemDetail(id: string | undefined): UseFetchResult<ItemDetail> {
  const url = id ? buildCharacterDetailUrl(id) : null;
  return useFetch<ItemDetail>(url);
}
