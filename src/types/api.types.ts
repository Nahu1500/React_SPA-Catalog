export interface ApiListResponse<T> {
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

export interface BaseItem {
  id: number;
  name: string;
  image: string;
}

export interface ItemSummary extends BaseItem {
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  episode: string[];
  url: string;
  created: string;
}

export type ItemDetail = ItemSummary;
