import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {RegisterComponent} from "./components/register/register.component";
import { LoginComponent } from './components/login/login.component';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule} from "@angular/common/http";
import {AuthEffects} from "./ngrx/ngrx.effects";
import {StoreModule} from "@ngrx/store";
import {NgrxReducer} from "./ngrx/ngrx.reducer";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({auth: NgrxReducer}),
      StoreDevtoolsModule.instrument({maxAge:25, logOnly: environment.production}),
    EffectsModule.forRoot([AuthEffects]),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
