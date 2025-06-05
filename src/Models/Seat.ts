// ------------------------------
// imports
// ------------------------------
import { SeatStatus } from "../enums/SeatStatus";
import { SeatZone } from "../enums/SeatZone";
import { Hall } from "./Hall";

export class Seat {
  constructor(
    private seatID: string,
    private row: number,
    private column: string,
    private hall: Hall,
    private seatZone: SeatZone,
    private seatStatus: SeatStatus
  ) {}

  // -----------------------------
  // Getters and Setters
  // -----------------------------
  public getSeatID(): string {
    return this.seatID;
  }
  public getZone(): SeatZone {
    return this.seatZone;
  }
  public getStatus(): SeatStatus {
    return this.seatStatus;
  }
  public setStatus(status: SeatStatus): void {
    this.seatStatus = status;
  }
  public isAvailable(): boolean {
    return this.seatStatus === SeatStatus.AVAILABLE;
  }
  public getHall(): Hall {
    return this.hall;
  }
  public getAvailableSeats(): Seat[] {
    return [];
  }
}
