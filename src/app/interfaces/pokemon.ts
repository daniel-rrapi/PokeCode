export interface PokemonApiResponse {
  count: number;
  next: string;
  previous: null;
  results: PokemonDetails[];
}
export interface PokemonDetails {
  name: string;
  url: string;
}
export interface Pokemon {
  abilities: [];
  base_experience: number | null;
  forms: [];
  game_indices: [];
  height: number | null;
  held_items: [];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {};
  sprites: {};
  stats: [];
  types: [];
  weight: number | null;
}
