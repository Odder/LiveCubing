import { Component, OnInit } from '@angular/core';
import { Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Tournament} from "../../models/tournament";

interface QueryResponse {
  loading: boolean
  allCompetitions: Tournament
}

const allCompetitions = gql`
  query AllCompetitors {
  allCompetitions {
    id
    name
    country
    city
    startDate
    endDate
    competitors(filter: {isNotable: true}) {
      name
    }
    _competitorsMeta {count}
    events {
      name
      _roundsMeta {count}
    }
  }
}
`

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent implements OnInit {

  tournaments: any;
  isLoading: boolean;

  constructor( private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.query<QueryResponse>({
      query: allCompetitions
    }).subscribe(({data}) => {
      this.isLoading = data.loading;
      this.tournaments = data.allCompetitions;
    });
  }

}
