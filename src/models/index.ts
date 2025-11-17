export type Combo = {
  id: string;
  title: string;
  price: string;
  priceId?: string;
  keyFeatures: number[];
  badge?: string | null;
};

export type CombosConfig = {
  allFeatures: string[];
  combos: Combo[];
};
