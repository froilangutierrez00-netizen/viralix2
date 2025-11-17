export type Combo = {
  id: string;
  title: string;
  price: string;
  priceId?: string;
  featureIndices: number[];
};

export type CombosConfig = {
  allFeatures: string[];
  combos: Combo[];
};
