import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pokedex',
    component: AllPokemonComponent,
  },
  {
    path: 'pokedex/:id',
    component: PokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, BrowserModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
