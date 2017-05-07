import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const AllCompetitors = gql`
  query AllCompetitors { 
    allCompetitions(first: 5) {
      name
      events {
        name
        formats {
          name
        }
      }
      competitors {
        name
        records {
          region
        }
      }
    }
  }
`;

interface QueryResponse{
  data
  loading
}

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
})
export class TournamentComponent implements OnInit {

  events;
  loading: boolean;

  constructor(private apollo: Apollo) {
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

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: AllCompetitors
    }).subscribe(({data}) => {
      this.loading = data.loading;
      console.log(data);
    });
  }



}
