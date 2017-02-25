export interface FirebaseTournamentResultsResults {
  annotation: string,
  competitor: Array<any>,
  result: Number,
  times: Array<Number>
}

export interface FirebaseTournamentResults {
  fullName: string,
  results: Array<FirebaseTournamentResultsResults>
}
