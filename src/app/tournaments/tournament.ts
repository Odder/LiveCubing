
export interface TournamentTime {
  penaltiesAfter: Number,
  penaltiesBefore: Number,
  rawTime: Number,
  time: String,
}

export interface TournamentCompetitor {
  country: string,
  name: string,
  wca?: string
}

export interface TournamentResults {
  annotation: string,
  best: Number,
  rank: Number,
  competitor: Array<TournamentCompetitor>,
  result: Number,
  times: Array<TournamentTime>
}

export interface Tournament {
  fullName: string,
  format: string,
  startTime: string,
  results: Array<TournamentResults>
}

export interface TournamentRoundListItem {
  eventId: string,
  roundNumber: Number
}