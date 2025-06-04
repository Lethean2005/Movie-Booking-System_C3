import { Seat } from "./Seat";

export abstract class Ticket{
    constructor(
        private ticketID: string,
        private seats: Seat[] ,
        private Hallname: string,
       
    ){
        
    }    public getHallName(): string {
        return this.Hallname;
    }
}