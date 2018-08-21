import React from "react";
import email from "../emails/test/email.js";

class Email extends Component {
    state = {
        name: "Elisa"
    }

    sendEmail = () => {
    email.send({
        template: "test",
        message: {
            to: "elisaschwarz87@gmail.com"
        },
        locals: {
            name: this.state.name
        }
    }).then(console.log)
    .catch(console.error);
    };


}
 