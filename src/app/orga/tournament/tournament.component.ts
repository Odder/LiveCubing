import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {

  events;

  constructor() {
    this.events = [
      {
        "name": "3x3",
        "rounds": [
          {
            "format": "best of 5",
            "round": "first",
            "timeLimit": "10:00",
            "cutoff": "3:00",
            "groups": 2,
            "proceedFormat": "number",
            "proceed": 16,
            "competitors": 25,
          },
          {
            "format": "best of 5",
            "round": "second",
            "timeLimit": "10:00",
            "cutoff": "3:00",
            "groups": 2,
            "proceedFormat": "number",
            "proceed": 16,
            "competitors": 25,
          }
        ]
      },
      {
        "name": "4x4",
        "rounds": [
          {
            "format": "best of 5",
            "round": "first",
            "timeLimit": "10:00",
            "cutoff": "3:00",
            "groups": 2,
            "proceedFormat": "number",
            "proceed": 16,
            "competitors": 25,
          },
          {
            "format": "best of 5",
            "round": "second",
            "timeLimit": "10:00",
            "cutoff": "3:00",
            "groups": 2,
            "proceedFormat": "number",
            "proceed": 16,
            "competitors": 25,
          }
        ]
      }


    ]
  }

  ngOnInit() { }



}
