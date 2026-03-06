
import { Person } from "./Person.js";

export class Faculty extends Person {

    constructor(name: string, address: string) {
        super(name, address);
    }

    teach(): void {
        console.log(this.name, "is teaching");
    }

    displayAddress(): void {
        console.log("Faculty Address:");
        super.displayAddress();
    }
}
