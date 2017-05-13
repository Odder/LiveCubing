import { Component, OnInit } from '@angular/core';
import { Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {Competition} from "../../models/models.competition";

interface QueryResponse {
  loading: boolean
  allCompetitions: Competition
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
`

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css'],
})
export class LobbyComponent implements OnInit {

  competitions: any;
  isLoading: boolean;

  constructor( private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.query<QueryResponse>({
      query: allCompetitions
    }).subscribe(({data}) => {
      console.log(data);
      this.isLoading = data.loading;
      this.competitions = data.allCompetitions;
    });
  }

}
