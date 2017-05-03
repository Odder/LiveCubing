import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { TournamentComponent } from './tournament/tournament.component';
import { OrgaComponent } from './orga/orga.component';
import { CommonModule } from '@angular/common';

const orgaRoutes: Routes = [
  {
    path: 'orga',
    component: OrgaComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'tournament/:id', component: TournamentComponent}
        ]
      }

    ]
  }]

@NgModule({
  imports: [
    RouterModule.forChild(orgaRoutes),
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
    TournamentComponent,
    OrgaComponent
    ]
})
export class OrgaModule { }
