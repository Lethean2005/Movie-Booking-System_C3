import { SeatStatus, SeatType } from "./SeatStatus";

export interface Seat {
  id: string;
  row: string;
  number: number;
  type: SeatType;
  status: SeatStatus;
  price: number;
}