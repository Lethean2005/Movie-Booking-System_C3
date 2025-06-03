import { Booking} from "./Booking";
import { Movie } from "./Movie";
import { Review } from "./Review";
export class User {
    constructor(
        public userID: string,
        public firstName: string,
        public lastName: string,
        public email: string
    ) {}
}