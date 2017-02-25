import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TournamentComponent } from './tournament/tournament.component';
import { OrgaComponent } from './orga/orga.component';

const orgaRoutes: Routes = [
  {
    path: 'orga',
    component: OrgaComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'tournament', component: TournamentComponent}
        ]
      }

    ]
  }]

@NgModule({
  imports: [
    RouterModule.forChild(orgaRoutes)
  ],
  declarations: [TournamentComponent]
})
export class OrgaModule { }
