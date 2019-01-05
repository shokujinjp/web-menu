import { cast, Castable } from "@bitr/castable";

export class Menu extends Castable {
  @cast id: string;
  @cast name: string;
  @cast price: number;
  @cast category: string;
  @cast day_start: string;
  @cast day_end: string;
  @cast can_weekday: string;
  @cast description: string;
}
