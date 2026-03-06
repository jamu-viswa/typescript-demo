import { Person } from "./Person.js";
export class Student extends Person {
    constructor(name, address) {
        super(name, address);
    }
    study() {
        console.log(this.name, "is studying");
    }
    displayAddress() {
        console.log("Student Address:");
        super.displayAddress();
    }
}
