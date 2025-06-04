export class Hall {
constructor(
    private hallID: string,
    private hallName: string,
    private totalSeats: number,
    private availableSeats: number,
    private seatStatus: Map<string, string> 
){
    
}

}