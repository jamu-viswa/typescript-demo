import { Person } from "./Person.js";
export class Staff extends Person {
    constructor(name, address) {
        super(name, address);
    }
    work() {
        console.log(this.name, "is working");
    }
    displayAddress() {
        console.log("Staff Address:");
        super.displayAddress();
    }
}
