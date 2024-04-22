"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Superhero = void 0;
var Superhero = /** @class */ (function () {
    function Superhero(name) {
        this.name = name;
    }
    Superhero.prototype.getName = function () {
        return this.name;
    };
    return Superhero;
}());
exports.Superhero = Superhero;
