
import { Person } from "./Person.js";

export class Student extends Person {

    constructor(name: string, address: string) {
        super(name, address); 
    }

    study(): void {
        console.log(this.name, "is studying");
    }

    displayAddress(): void {
        console.log("Student Address:");
        super.displayAddress(); 
    }
}
