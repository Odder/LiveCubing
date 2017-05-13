import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApolloClient, createNetworkInterface } from 'apollo-client';
import {ApolloModule} from 'apollo-angular';

import { CompetitionsService } from './competitions.service';
import { OrganisationModule } from './organisation.module/organisation.module';
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
} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { LobbyComponent } from './live/lobby/lobby.component';
import { CompetitionComponent } from './live/competition/competition.component';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj2alutw9bc0d0199judyfdoj'
  }),
});

export function provideClient(): ApolloClient {
  return client;
}

const appRoutes: Routes = [
  {
    path: 'lobby',
    component: LobbyComponent
  },
  {
    path: 'competition/:name',
    component: CompetitionComponent
  },
  {
    path: 'organisation',
    loadChildren: 'app/organisation.module/organisation.module#OrganisationModule'
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
];

export const firebaseConfig = {
  apiKey: 'AIzaSyC4vFNKWMVSSSlUmiVAc1hS5UzRgdcVZkg',
  authDomain: 'livecubing-6f143.firebaseapp.com',
  databaseURL: 'https://livecubing-6f143.firebaseio.com',
  storageBucket: 'livecubing-6f143.appspot.com',
  messagingSenderId: '969954109134'
};


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LobbyComponent,
    CompetitionComponent,
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
    OrganisationModule,
    ApolloModule.forRoot(provideClient)
  ],
  providers: [CompetitionsService, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
