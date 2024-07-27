const checkTranfporterWork = require("./checkTranfporterWork");
const mailOptions = require("./mailOptions");
const transporter = require("./transporter");
const Verification = require('../model/verificationModel');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = async function ({ _id, email }) {
    checkTranfporterWork();

    const userId = _id;
    // todo: Backend link aniqlash
    const serverLink = process.env.SERVER_LINK;
    // todo: Unique Id aniqlash
    const uniqueId = uuidv4() + userId;
    const hashedUniqueId = await bcrypt.hash(uniqueId, 15);
    // todo: Ular yordamida foydalanuvchiga jo'natiladigan linkni hosil qilish
    const link = `${serverLink}/api/auth/verify/${userId}/${uniqueId}`

    // todo: Ma'lumotlar omborida yangi verification modelini hosil qilish
    const newVerificationData = new Verification({
        userId,
        uniqueId: hashedUniqueId,
        expiresIn: Date.now() + 18000000,
    });
    await newVerificationData.save();

    const mailTitle = 'Hisobga kirish uchun tasdiqlang'
    const mailText = `<p>
            Iltimos, rasamahani tasdiqlash uchun quyidagi havoladan foydalaning: <br />
            <a href=${link}>${link}</a> <br />
            Havolaning amal qilish muddati <b>5 soat</b>
        </p>`

    transporter.sendMail(mailOptions(email, mailTitle, mailText), function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};