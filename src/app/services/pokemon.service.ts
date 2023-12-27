import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonApiResponse } from '../interfaces/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  getAllPokemon() {
    return this.http.get<PokemonApiResponse>(
      'https://pokeapi.co/api/v2/pokemon/'
    );
  }
  getPokemonByName(pkmName: String) {
    return this.http.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pkmName}`
    );
  }
}
