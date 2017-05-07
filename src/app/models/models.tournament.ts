import {MetaData} from "./models.metaData";
import {Events} from "./models.event";
import {Competitors} from "./models.competitor";

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
