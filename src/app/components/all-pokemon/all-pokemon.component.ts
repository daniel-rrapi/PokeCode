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
  pageNum: number[] = [];
  displayPageNum: number[] = [];
  currentPage: number = 1;
  constructor(private pokemonSrv: PokemonService) {
    pokemonSrv.getAllPokemon().subscribe((data) => {
      this.pkms = data;

      for (let i = 0; i < pokemonSrv.pageNum; i++) {
        this.pageNum.push(i);
        if (i < 5) {
          this.displayPageNum.push(i);
        }
      }
    });
  }
  fetchByPage(page: number) {
    this.currentPage = page;
    this.pokemonSrv.getAllPokemon(page).subscribe((data) => {
      this.pkms = data;
    });
    this.displayPageNum = this.pageNum.slice(
      this.currentPage - 1 < 0 ? 0 : this.currentPage - 1,
      this.currentPage + 4
    );
  }
}
