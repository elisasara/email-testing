import React from "react";
import Email from "email-templates";

class Email extends Component {
    state = {
        name: "Elisa"
    }



    sendEmail = () => {
        const email = new Email ({
            message: {
                from: "urda.elisa@gmail.com"
            },
            send: true
            transport: {
                jsonTransport: true
            }
        });
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
 