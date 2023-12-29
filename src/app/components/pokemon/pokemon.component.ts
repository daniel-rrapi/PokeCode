import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemon!: Pokemon;
  constructor(private route: ActivatedRoute, private pkmSrv: PokemonService) {
    route.paramMap
      .pipe(
        map((param) => {
          const name = param.get('name');
          return name;
        }),
        switchMap((name) => {
          if (name) {
            return pkmSrv.getPokemonByName(name);
          } else throw 'Pokemon not found';
        })
      )
      .subscribe((data) => {
        this.pokemon = data;
      });
  }

  ngOnInit(): void {}
}
