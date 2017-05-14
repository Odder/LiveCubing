import {MetaData} from './models.metaData';
import { Puzzle } from './models.puzzle';
import { Round } from './models.round';

export interface Event {
  puzzle: Puzzle;
  _roundsMeta: MetaData;
  id: string;
  rounds: Round[];
}
