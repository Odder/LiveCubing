import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class TournamentsService {

  tournamentsRef;
  tournamentRef;

  constructor(public af: AngularFire) {
    this.tournamentsRef = this.af.database.list('tournaments');
  }

  public getTournaments() {
    return (
      this.tournamentsRef
    );
  }

  public setTournament(id) {
    this.tournamentRef = this.af.database.object('tournaments');
    this.tournamentRef = this.tournamentRef.child('id');
  }

  public getTournamentResults(id) {

    return (
      this.af.database.object('tournaments/' + id)
    );
  }

  public getTournamentResultsByEventRound(tournamentId, eventId, roundNumber ) {
    return (
      this.af.database.object(
        'tournaments/' + tournamentId + 
        '/results/' + eventId + 
        '/round-' + roundNumber
      )
    );
  }

  public getTournamentRounds(tournamentId ) {
    return (
      this.af.database.object(
        'tournaments/' + tournamentId + 
        '/rounds'
      )
    );
  }
}
