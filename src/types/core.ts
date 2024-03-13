import { Calculator } from "./calculator";

export interface CoreState {
  selected: string;
  calculators: ({
    id: string;
  } & Calculator)[];
}