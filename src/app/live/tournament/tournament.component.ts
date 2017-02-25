import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TournamentsService } from '../../tournaments.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournamentId;
  private sub: any;
  activeResults;
  eventId;
  roundNumber;
  roundList;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ts: TournamentsService
  ) { }

  ngOnInit() {

    this.tournamentId = this.route.params['id'];
    this.sub = this.route.params.subscribe(params => {
      this.tournamentId = params['id'];
      this.ts.getTournamentRounds(this.tournamentId).subscribe(
        rounds => {
          this.updateRounds(rounds);
        });

        if(params['event'] && params['round']) {
          this.eventId = params['event'];
          this.roundNumber = params['round'];

          this.activeResults = this.ts.getTournamentResultsByEventRound(
              this.tournamentId,
              this.eventId,
              this.roundNumber
            );
        }
    });
  }

  updateRounds(rounds) {
    this.roundList = rounds;
  }

}
