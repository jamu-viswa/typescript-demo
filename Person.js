var Person = /** @class */ (function () {
    function Person(name, address) {
        this.name = name;
        this.address = address;
    }
    Person.prototype.displayAddress = function () {
        console.log("Address:", this.address);
    };
    return Person;
}());
export { Person };
