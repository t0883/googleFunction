import { http } from "@google-cloud/functions-framework";
import mail, {MailService} from "@sendgrid/mail";
import "dotenv/config";

http("helloWebmail", (req, res) => {

    // console.log(process.env.SENDGRID_API_KEY);

    console.log(process.env.TEST_KEY);
    mail.setApiKey(process.env.SENDGRID_API_KEY!);


    const msg = {
        to: req.body.to,
        from: "tumskruven@gmail.com",
        subject: req.body.subject,
        text: req.body.text
    };

    mail.send(msg).then(()=>{
        console.log("Email sent");
    }).catch((error) => {
        console.log(error);
    });

    res.send("Hello");
});