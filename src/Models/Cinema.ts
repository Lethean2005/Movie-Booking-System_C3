import { Hall } from "./Hall";
export class Cinema{
    constructor(
        private cinemaID: number,
        private name: string,
        private location: string,
        private hallname: Hall[],
    ){
        
    }
    listMovies(): string[] {
        
        return [];
    }

   
}