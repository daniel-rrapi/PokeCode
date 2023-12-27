import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AllPokemonComponent } from './components/all-pokemon/all-pokemon.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SinglePokemonCardComponent } from './components/single-pokemon-card/single-pokemon-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, AllPokemonComponent, SinglePokemonCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
