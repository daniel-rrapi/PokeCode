import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PokemonApiResponse } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}
  getPokemon() {
    return this.http.get<PokemonApiResponse>(
      'https://pokeapi.co/api/v2/pokemon/'
    );
  }
}
