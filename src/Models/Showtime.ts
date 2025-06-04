import { Seat } from "./Seat";
import { Movie } from "./Movie";
import { Hall } from "./Hall";

export class ShowTime {
    static selectSeat(arg0: string) {
        throw new Error('Method not implemented.');
    }
    static getSeats() {
        throw new Error('Method not implemented.');
    }
    constructor(
        public showtimeID: number,
        public startTime: Date,
        public cinema: string,
        public movie: Movie,
        private hall: Hall // ✅ Add Hall instance here
    ) {}

    public showTime(): string {
        return `${this.startTime.toLocaleString()} at ${this.cinema}`;
    }

    static addShowTime(showtimeID: number, startTime: Date, cinema: string, movie: Movie, hall: Hall): ShowTime {
        const st = new ShowTime(showtimeID, startTime, cinema, movie, hall); // ✅ Pass hall
        movie._pushShowTime(st);
        return st;
    }

    // ✅ Access the hall's seat logic
    public getAvailableSeats(): Seat[] {
        return this.hall.getAvailableSeats();
    }

public selectSeat(seatNumber: string): boolean {
    const seat = this.hall.findSeat(seatNumber);
    return seat ? seat.select() : false;
}


    public getSeats(): Seat[] {
        return this.hall.getSeats();
    }
}
