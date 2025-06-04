import { SeatStatus } from "../enums/SeatStatus";
import { SeatZone } from "../enums/SeatZone";
import { Hall } from "./Hall";


export class Seat {
    constructor(
        private seatID: string,
        private row: number,
        private column: string,
        private Hall:Hall,
        private seatZone: SeatZone,
        private seatStatus: SeatStatus
    ){

    }
    public getAvailableSeats(): Seat[] {
        
        return [];
    }}