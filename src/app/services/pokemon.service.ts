import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonApiResponse } from '../interfaces/pokemon';
import { Observable } from 'rxjs';

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
