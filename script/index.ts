import { Superhero } from "./models/superhero";
import { http } from "@google-cloud/functions-framework";
require("dotenv").config();

http("helloHero", (req, res) => {
    const hero = new Superhero(req.body.name);


    console.log(process.env.TEST_KEY);

    res.send(hero.getName());
});