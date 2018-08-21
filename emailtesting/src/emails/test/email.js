const Email = require("email-templates");

module.exports = function () {
    const email = new Email({
        message: {
            from: "urda.elisa@gmail.com"
        },
        send: true,
        transport: {
            jsonTransport: true
        }
    });
};
