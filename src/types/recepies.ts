export interface Recepies {
  from:   number;
  to:     number;
  count:  number;
  _links: Links;
  hits:   Hit[];
}

export interface Links {
  self: Next;
  next: Next;
}

export interface Next {
  href:  string;
  title: string;
}

export interface Hit {
  recipe: Recipe;
  _links: Links;
}

export interface Recipe {
  uri:               string;
  label:             string;
  image:             string;
  images:            Images;
  source:            string;
  url:               string;
  shareAs:           string;
  yield:             number;
  dietLabels:        string[];
  healthLabels:      string[];
  cautions:          string[];
  ingredientLines:   string[];
  ingredients:       Ingredient[];
  calories:          number;
  glycemicIndex:     number;
  totalCO2Emissions: number;
  co2EmissionsClass: string;
  totalWeight:       number;
  cuisineType:       string[];
  mealType:          string[];
  dishType:          string[];
  instructions:      string[];
  tags:              string[];
  externalId:        string;
  totalNutrients:    TotalDaily;
  totalDaily:        TotalDaily;
  digest:            Digest[];
  totalTime?: number
}

export interface Digest {
  label:        string;
  tag:          string;
  schemaOrgTag: string;
  total:        number;
  hasRDI:       boolean;
  daily:        number;
  unit:         string;
  sub:          TotalDaily;
}

export interface TotalDaily {
}

export interface Images {
  THUMBNAIL: Large;
  SMALL:     Large;
  REGULAR:   Large;
  LARGE:     Large;
}

export interface Large {
  url:    string;
  width:  number;
  height: number;
}

export interface Ingredient {
  text:     string;
  quantity: number;
  measure:  string;
  food:     string;
  weight:   number;
  foodId:   string;
}
