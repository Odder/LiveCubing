import { MetaData } from "./models.metaData";
import { Event } from "./models.event";
import { Competitors } from "./models.competitor";

export interface Competition {
  id: string,
  slug: string,
  name: string,
  country: string,
  city: string,
  startDate: Date,
  endDate: Date,
  competitors: Competitors[],
  _competitorsMeta: MetaData,
  events: Event[],
}
