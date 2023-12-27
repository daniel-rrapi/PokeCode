import { Component } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonApiResponse } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-all-pokemon',
  templateUrl: './all-pokemon.component.html',
  styleUrls: ['./all-pokemon.component.scss'],
})
export class AllPokemonComponent {
  pkms!: PokemonApiResponse;
  constructor(private pokemonSrv: PokemonService) {
    pokemonSrv.getAllPokemon().subscribe((data) => {
      console.log(data);
      this.pkms = data;
    });
  }
}
