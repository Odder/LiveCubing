
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

export interface MetaData {
  count: number,
}
export interface Competitors {
  name: string,
}
export interface Events {
  name: string,
  format: string,
  _roundsMeta: MetaData,
}

export interface Tournament {
  id: string,
  name: string,
  country: string,
  city: string,
  startDate: Date,
  endDate: Date,
  competitors: Competitors[],
  _competitorsMeta: MetaData,
  events: Events[],
}
