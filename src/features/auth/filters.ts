export interface MovieFilters { //Estructura de todos los filtros que el usuario puede aplicar en la cartelera
  search: string;
  genre: string;
  ageRating: string;
  language: string;
  roomType: string;
  format: string;
  complex: string;
  onlyAvailable: boolean;
}