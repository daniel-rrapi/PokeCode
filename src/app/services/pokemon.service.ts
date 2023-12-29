import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon, PokemonApiResponse } from '../interfaces/pokemon';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pageNum: number = 1;
  constructor(private http: HttpClient) {}
  getAllPokemon(pageNumber: number = 0) {
    return this.http
      .get<PokemonApiResponse>(
        'https://pokeapi.co/api/v2/pokemon/?offset=' +
          pageNumber * 20 +
          '&limit=20'
      )
      .pipe(
        tap((pokemonResponse) => {
          this.pageNum = Math.ceil(
            pokemonResponse.count / pokemonResponse.results.length
          );
        })
      );
  }
  getPokemonByName(pkmName: String) {
    return this.http.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pkmName}`
    );
  }
}
