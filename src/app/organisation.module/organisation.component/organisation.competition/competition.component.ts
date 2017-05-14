import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Competition } from '../../../models/models.competition';
import { ActivatedRoute, Params } from '@angular/router';
import gql from 'graphql-tag';

const competitionDetails = gql`
  query ($slug: String!) {
    Competition(slug: $slug) {
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
          id
        }
        rounds {
          _competitorsMeta {
            count
          }
        }
      }
    }
  }
`;

interface QueryResponse {
  Competition: Competition;
}

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss'],
})
export class CompetitionComponent implements OnInit {
  isLoading = true;
  competition: Competition;

  constructor(private apollo: Apollo, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.isLoading = true;
        return this.apollo.query<QueryResponse>({
          query: competitionDetails,
          variables: {
            slug: params['slug']
          }
        });
      })
      .subscribe(({data}) => {
        this.competition = data.Competition;
        this.isLoading = false;
        console.log(this.competition);
      });
  }
}
