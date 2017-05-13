import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { Event } from '../../models/models.event';
import {ActivatedRoute, Params} from "@angular/router";

interface QueryResponse {
  Competition: any
}

const AllEventsForCompetition = gql`
  query AllEventsForCompetition($name: String!) {
    Competition(name: $name) {
      name
      events {
        puzzle {
          name
        }
        rounds {
          competitors {
            name
          }
        }
      }
    }
  }
`

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['competition.component.scss'],
})
export class CompetitionComponent implements OnInit {
  competitionName: string;
  events: Event[];
  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.competitionName = params['name'];
        return this.apollo.query<QueryResponse>({
          query: AllEventsForCompetition,
          variables: {
            name: this.competitionName
          }
        })
      })
      .subscribe(({data}) =>{
        this.events = data.Competition.events;
        console.log(this.events);
      });
  }
}
