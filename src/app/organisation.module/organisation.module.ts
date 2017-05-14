import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './organisation.component/organisation.competition/competition.component';
import { OrgaComponent } from './organisation.component/orga.component';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './organisation.component/organisation.lobby/lobby.component';
import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdIconModule,
  MdListModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule,
  MdInputModule
} from '@angular/material';
import { AddRoundComponent } from './organisation.component/organisation.competition/event/add-round/add-round.component';
import { EventComponent } from './organisation.component/organisation.competition/event/event.component';
import { FormsModule } from '@angular/forms';

const organisationRoutes: Routes = [
  {
    path: 'organisation',
    component: OrgaComponent,
    children: [
      {
        path: '',
        redirectTo: 'lobby',
        pathMatch: 'prefix'
      },
      {
        path: 'competition/:slug',
        component: CompetitionComponent
      },
      {
        path: 'lobby',
        component: LobbyComponent
      }
    ]
  }];

@NgModule({
  imports: [
    RouterModule.forChild(organisationRoutes),
    MdToolbarModule,
    MdChipsModule,
    MdTabsModule,
    MdCardModule,
    MdIconModule,
    MdListModule,
    MdSidenavModule,
    MdButtonModule,
    MdInputModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    CompetitionComponent,
    OrgaComponent,
    LobbyComponent,
    AddRoundComponent,
    EventComponent
    ]
})
export class OrganisationModule { }
