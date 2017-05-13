import { Component, OnInit } from '@angular/core';
import { Competition } from '../../../models/models.competition';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const allCompetitions  = gql `
  query {
    allCompetitions {
      id
      slug
      name
      country
      city
      startDate
      endDate
      _competitorsMeta {
        count
      }
      events {
        puzzle {
          name
        }
        _roundsMeta {
          count
        }
      }
    }
  }
`;

interface QueryResponse {
  allCompetitions: Competition[];
}

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {
  competitions: Competition[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.query<QueryResponse>({
      query: allCompetitions
    }).subscribe(({data}) => {
      this.competitions = data.allCompetitions;
    });
  }
}
