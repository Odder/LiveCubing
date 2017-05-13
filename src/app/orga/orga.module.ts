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
import { CompetitionComponent } from './competition/competition.component';
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
          {path: 'competition/:id', component: CompetitionComponent}
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
    CompetitionComponent,
    OrgaComponent
    ]
})
export class OrgaModule { }
