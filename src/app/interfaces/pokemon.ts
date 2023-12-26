export interface PokemonApiResponse {
  count: number;
  next: string;
  previous: null;
  result: PokemonDetails[];
}
export interface PokemonDetails {
  name: string;
  url: string;
}
