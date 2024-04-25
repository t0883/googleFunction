"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions_framework_1 = require("@google-cloud/functions-framework");
const mail_1 = __importDefault(require("@sendgrid/mail"));
require("dotenv/config");
(0, functions_framework_1.http)("helloWebmail", (req, res) => {
    console.log(process.env.TEST_KEY);
    mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
        to: req.body.to,
        from: "-",
        subject: req.body.subject,
        text: req.body.text
    };
    mail_1.default.send(msg).then(() => {
        console.log("Email sent");
    }).catch((error) => {
        console.log(error);
    });
    res.send("Hello");
});
//# sourceMappingURL=index.js.map
