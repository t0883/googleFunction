import { Superhero } from "./models/superhero";
import { http } from "@google-cloud/functions-framework";

http("helloHero", (req, res) => {
    const hero = new Superhero(req.body.name);

    res.send(hero.getName());
});