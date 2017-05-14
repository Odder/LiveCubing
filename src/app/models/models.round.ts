import { Puzzle } from './models.puzzle';
import { Competitor } from './models.competitor';
import { Event } from './models.event';
import { MetaData } from './models.metaData';

export interface Round {
  competitors: Competitor;
  cutoff: number;
  event: Event;
  format: string;
  id: string;
  proceedMethod: string;
  proceeding: number;
  puzzle: Puzzle;
  // results:
  roundName: string;
  roundNumber: number;
  timeLimit: number;
  _competitorsMeta: MetaData;
  numberOfGroups: number;
}
