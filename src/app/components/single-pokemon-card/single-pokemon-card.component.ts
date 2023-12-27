import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-single-pokemon-card',
  templateUrl: './single-pokemon-card.component.html',
  styleUrls: ['./single-pokemon-card.component.scss'],
})
export class SinglePokemonCardComponent implements OnInit {
  @Input() pkmName: any;
  pokemon: any;
  constructor(private pkmSrv: PokemonService) {}

  ngOnInit(): void {
    this.pkmSrv.getPokemonByName(this.pkmName).subscribe((data) => {
      this.pokemon = data;
      console.log(this.pokemon);
    });
  }
}
