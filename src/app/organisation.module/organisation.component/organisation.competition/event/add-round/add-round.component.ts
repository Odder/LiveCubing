import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../../../../../models/models.event';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const createRound = gql`
  mutation {
    createRound(
      competitionId: "cj2c8ww3lw1y401532q9v3x9n",
      cutoff: 2,
      format: BEST_OF_3,
      numberOfGroups: 3,
      proceedMethod: PERCENTAGE,
      proceeding: 75,
      puzzleId: "cj2c8u5miwivs0119uslqcize",
      eventId: "cj2ltduff1px30134aau1vl3d",
      roundName: FIRST_ROUND,
      roundNumber: 2,
      timeLimit: 1
    ) {
      id
    }
  }
`;

@Component({
  selector: 'app-add-round',
  templateUrl: './add-round.component.html',
  styleUrls: ['./add-round.component.scss']
})
export class AddRoundComponent implements OnInit {
  @Input() competitionId: string;
  @Input() event: Event;
  timeLimit: number;
  cutoff: number;
  numberOfGroups: number;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
  }

  addRound = () => {
    this.apollo.mutate({
      mutation: createRound,
      variables: {
        repoFullName: 'apollographql/apollo-client'
      }
    }).subscribe(({ data }) => {
      console.log('got data', data);
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }
}
