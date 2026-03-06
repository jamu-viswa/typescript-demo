
import { Person } from "./Person.js";

export class Staff extends Person {

    constructor(name: string, address: string) {
        super(name, address);
    }

    work(): void {
        console.log(this.name, "is working");
    }

    displayAddress(): void {
        console.log("Staff Address:");
        super.displayAddress();
    }
}
