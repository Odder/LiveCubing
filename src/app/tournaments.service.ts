import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TournamentsService {

  tournamentsRef;
  tournamentRef;

  constructor(public af: AngularFireDatabase) {
    this.tournamentsRef = this.af.list('tournaments');
  }

  public getTournaments() {
    return (
      this.tournamentsRef
    );
  }

  public setTournament(id) {
    this.tournamentRef = this.af.object('tournaments');
    this.tournamentRef = this.tournamentRef.child('id');
  }

  public getTournamentResults(id) {
    return (
      this.af.object('models/' + id)
    );
  }

  public getTournamentEvents(id) {
    return (
      this.af.list('models/' + id + '/events')
    );
  }

  public getTournamentRoundByEventRound(tournamentId, eventId, roundNumber ) {
    return (
      this.af.object(
        'models/' + tournamentId +
        '/results/' + eventId +
        '/round-' + roundNumber
      )
    );
  }

  public getTournamentResultsByEventRound(tournamentId, eventId, roundNumber ) {
    return (
      this.af.list(
        'models/' + tournamentId +
        '/results/' + eventId +
        '/round-' + roundNumber +
        '/results',
        {
          'query': {
            'orderByChild': 'rank'
          }
        }
      )
    );
  }

  public getTournamentResultsByEvent(tournamentId, eventId ) {
    return (
      this.af.list(
        'models/' + tournamentId +
        '/results/' + eventId
      )
    );
  }

  public getTournamentRounds(tournamentId ) {
    return (
      this.af.object(
        'models/' + tournamentId +
        '/rounds'
      )
    );
  }
}
