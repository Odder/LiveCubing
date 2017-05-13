import {MetaData} from "./models.metaData";

export interface Event{
  name: string,
  format: string,
  _roundsMeta: MetaData,
}
