import { Component, OnInit } from '@angular/core';
import { TournamentsService } from '../../tournaments.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
  providers: [TournamentsService]
})
export class LobbyComponent implements OnInit {

  tournaments;

  constructor(ts: TournamentsService) {
    ts.getTournaments().subscribe(tournaments => {
        this.tournaments = tournaments;
      });
  }

  ngOnInit() {
  }

}
