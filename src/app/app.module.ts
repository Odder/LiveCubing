import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { LobbyComponent } from './live/lobby/lobby.component';

const appRoutes:Routes = [
  {
    path: 'lobby',
    component: LobbyComponent  
  },
  {
    path: '',
    redirectTo: '/lobby',
    pathMatch: 'full'
  }
]

export const firebaseConfig = {
  apiKey: "AIzaSyC4vFNKWMVSSSlUmiVAc1hS5UzRgdcVZkg",
  authDomain: "livecubing-6f143.firebaseapp.com",
  databaseURL: "https://livecubing-6f143.firebaseio.com",
  storageBucket: "livecubing-6f143.appspot.com",
  messagingSenderId: "969954109134"
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LobbyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
