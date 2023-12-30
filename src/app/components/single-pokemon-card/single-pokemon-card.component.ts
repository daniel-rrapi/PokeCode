import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-single-pokemon-card',
  templateUrl: './single-pokemon-card.component.html',
  styleUrls: ['./single-pokemon-card.component.scss'],
})
export class SinglePokemonCardComponent implements OnInit {
  @Input() pkmName: any;
  pokemon!: Pokemon;
  constructor(private pkmSrv: PokemonService) {}

  ngOnInit(): void {
    this.pkmSrv.getPokemonByName(this.pkmName).subscribe((data) => {
      if (typeof data === 'string') {
      } else {
        this.pokemon = data;
      }
    });
  }
}
