import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class CompetitionsService {

  competitionsRef;
  competitionRef;

  constructor(public af: AngularFireDatabase) {
    this.competitionsRef = this.af.list('competitions');
  }

  public getCompetitions() {
    return (
      this.competitionsRef
    );
  }

  public setCompetition(id) {
    this.competitionRef = this.af.object('competitions');
    this.competitionRef = this.competitionRef.child('id');
  }

  public getCompetitionResults(id) {
    return (
      this.af.object('models/' + id)
    );
  }

  public getCompetitionEvents(id) {
    return (
      this.af.list('models/' + id + '/events')
    );
  }

  public getCompetitionRoundByEventRound(competitionId, eventId, roundNumber ) {
    return (
      this.af.object(
        'models/' + competitionId +
        '/results/' + eventId +
        '/round-' + roundNumber
      )
    );
  }

  public getCompetitionResultsByEventRound(competitionId, eventId, roundNumber ) {
    return (
      this.af.list(
        'models/' + competitionId +
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

  public getCompetitionResultsByEvent(competitionId, eventId ) {
    return (
      this.af.list(
        'models/' + competitionId +
        '/results/' + eventId
      )
    );
  }

  public getCompetitionRounds(competitionId ) {
    return (
      this.af.object(
        'models/' + competitionId +
        '/rounds'
      )
    );
  }
}
