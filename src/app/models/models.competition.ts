import { MetaData } from './models.metaData';
import { Event } from './models.event';
import { Competitor } from './models.competitor';

export interface Competition {
  id: string;
  slug: string;
  name: string;
  country: string;
  city: string;
  startDate: Date;
  endDate: Date;
  competitors: Competitor[];
  _competitorsMeta: MetaData;
  events: Event[];
}
