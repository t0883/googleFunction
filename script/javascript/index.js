"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const superhero_1 = require("./models/superhero");
const functions_framework_1 = require("@google-cloud/functions-framework");
(0, functions_framework_1.http)("helloHero", (req, res) => {
    const hero = new superhero_1.Superhero(req.body.name);
    res.send(hero.getName());
});
//# sourceMappingURL=index.js.map