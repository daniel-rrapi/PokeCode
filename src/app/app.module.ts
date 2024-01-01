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
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllPokemonComponent,
    SinglePokemonCardComponent,
    PokemonComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
