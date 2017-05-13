import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  MdButtonModule,
  MdCardModule,
  MdChipsModule,
  MdIconModule,
  MdListModule,
  MdSidenavModule,
  MdTabsModule,
  MdToolbarModule
} from '@angular/material';
import { CompetitionComponent } from './organisation.component/organisation.competition/competition.component';
import { OrgaComponent } from './organisation.component/orga.component';
import { CommonModule } from '@angular/common';
import { LobbyComponent } from './organisation.component/organisation.lobby/lobby.component';

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
        path: 'competition/:id',
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
    CommonModule
  ],
  declarations: [
    CompetitionComponent,
    OrgaComponent,
    LobbyComponent
    ]
})
export class OrganisationModule { }
