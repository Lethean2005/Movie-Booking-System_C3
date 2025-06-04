import { SeatStatus } from "../enums/SeatStatus";

export class Seat {
    constructor(
        public seatNumber: string,  // like "A1", "B3"
        public row: number,
        public column: string,
        private available: boolean = true
    ) {}

    isAvailable(): boolean {
        return this.available;
    }
   select(): boolean {
        if (this.available) {
            this.available = false;
            return true;
        }
        return false;
    }
     getStatus(): SeatStatus {
        return this.available ? SeatStatus.AVAILABLE : SeatStatus.BOOKED;
    }
}
