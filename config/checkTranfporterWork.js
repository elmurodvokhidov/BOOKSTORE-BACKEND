const transporter = require("./transporter");

module.exports = function () {
    transporter.verify((error, success) => {
        if (error) {
            console.log("Xatolik Nodemailer bilan bog'liq... ", error);
        }
        else {
            console.log("Xabar jo'natishga tayyor...");
            console.log(success);
        }
    });
};