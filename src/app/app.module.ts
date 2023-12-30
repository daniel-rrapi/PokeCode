import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SinglePokemonCardComponent } from './components/single-pokemon-card/single-pokemon-card.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllPokemonComponent,
    SinglePokemonCardComponent,
    PokemonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
