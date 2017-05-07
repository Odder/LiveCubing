import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentsService } from '../../tournaments.service';
import { TournamentResults, TournamentRoundListItem } from '../../models/models.tournament';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['tournament.component.scss'],
})
export class TournamentComponent implements OnInit {

  private sub: any;
  tournamentId;
  events;
  eventId;
  roundNumber;
  activeResults: Array<TournamentResults> = <Array<TournamentResults>>[];
  activeRound: TournamentResults = <TournamentResults>{};
  roundList: Array<TournamentRoundListItem> = <Array<TournamentRoundListItem>>[];
  roundListByEvent: Array<TournamentRoundListItem> = <Array<TournamentRoundListItem>>[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ts: TournamentsService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.tournamentId = params['id'];
      this.ts.getTournamentRounds(this.tournamentId).subscribe(rounds => {
          this.updateRounds(rounds);
        });

      if(params['event'] && params['round']) {
        this.eventId = params['event'];
        this.roundNumber = params['round'];

        this.ts.getTournamentRoundByEventRound(
            this.tournamentId,
            this.eventId,
            this.roundNumber
          ).subscribe(results => {
            this.activeRound = results;
          });

        this.ts.getTournamentResultsByEventRound(
            this.tournamentId,
            this.eventId,
            this.roundNumber
          ).subscribe(results => {
            this.activeResults = results;
          });
      }

      this.ts.getTournamentEvents(this.tournamentId).subscribe(events => {
        this.events = events;
      });

      this.ts.getTournamentResultsByEvent(this.tournamentId, this.eventId).subscribe(resultsByEvent => {
        this.roundListByEvent = resultsByEvent;
      })

    });
  }

  updateRounds(rounds) {
    this.roundList = rounds;
    console.log(rounds);
  }

}
