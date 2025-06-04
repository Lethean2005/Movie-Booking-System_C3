import { Seat } from "./Seat";
import { SeatStatus } from "../enums/SeatStatus";

export class Hall {
    private seats: Seat[] = [];

    constructor(
        public hallID: number,
        public hallName: string
    ) {}


    generateSeats(rows: number, columns: string[]) {
        let seatNumber = 1;
        for (let row = 1; row <= rows; row++) {
            for (const col of columns) {
                const seatID = `${col}${row}`;
                this.seats.push(new Seat(seatID, row, col));
                seatNumber++;
            }
        }}

     getSeats(): Seat[] {
        return this.seats;
    }

     getAvailableSeats(): Seat[] {
        return this.seats.filter(seat => seat.isAvailable());
    }

    findSeat(seatID: string): Seat | undefined {
        return this.seats.find(seat => seat.seatNumber === seatID);
    }
}
