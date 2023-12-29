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
  pageNmbr: number[] = [];
  constructor(private pokemonSrv: PokemonService) {
    pokemonSrv.getAllPokemon().subscribe((data) => {
      console.log(data);
      this.pkms = data;
      // this.pageNmbr.push(pokemonSrv.pageNum);
      for (let i = 0; i < pokemonSrv.pageNum; i++) {
        this.pageNmbr.push(i);
      }
    });
    console.log('numero pag ', pokemonSrv.pageNum);
  }
  fetchByPage(page: number) {
    this.pokemonSrv.getAllPokemon(page).subscribe((data) => {
      this.pkms = data;
    });
  }
}
