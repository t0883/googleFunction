"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var superhero_1 = require("./models/superhero");
var functions_framework_1 = require("@google-cloud/functions-framework");
require("dotenv").config();
(0, functions_framework_1.http)("helloHero", function (req, res) {
    var hero = new superhero_1.Superhero(req.body.name);
    console.log(process.env.TEST_KEY);
    res.send(hero.getName());
});
