import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class TournamentsService {

  tournamentRef;

  constructor(public af: AngularFire) {
    this.tournamentRef = this.af.database.list('tournaments');
  }

  public getTournaments() {
    return (
      this.tournamentRef
    );
  }

}
