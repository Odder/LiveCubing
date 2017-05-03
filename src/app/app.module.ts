import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { TournamentsService } from './tournaments.service';
import { OrgaModule } from './orga/orga.module';
import 'hammerjs';

import {
  MdToolbarModule,
  MdChipsModule,
  MdTabsModule,
  MdCardModule,
  MdIconModule,
  MdListModule,
  MdButtonModule,
  MdSidenavModule
} from '@angular/material'

import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { LobbyComponent } from './live/lobby/lobby.component';
import { TournamentComponent } from './live/tournament/tournament.component';


const appRoutes:Routes = [
  {
    path: 'lobby',
    component: LobbyComponent
  },
  {
    path: 'tournament/:id',
    component: TournamentComponent
  },
  {
    path: 'tournament/:id/:event/:round',
    component: TournamentComponent
  },
  {
    path: 'orga',
    loadChildren: 'app/orga/orga.module#OrgaModule'
  },
  {
    path: '',
    redirectTo: '/lobby',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/lobby'
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
    LobbyComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    MdToolbarModule,
    MdChipsModule,
    MdTabsModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdButtonModule,
    BrowserAnimationsModule,
    OrgaModule
  ],
  providers: [TournamentsService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
