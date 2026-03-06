var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Person } from "./Person";
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(name, address) {
        return _super.call(this, name, address) || this;
    }
    Staff.prototype.work = function () {
        console.log(this.name, "is working");
    };
    Staff.prototype.displayAddress = function () {
        console.log("Staff Address:");
        _super.prototype.displayAddress.call(this);
    };
    return Staff;
}(Person));
export { Staff };
