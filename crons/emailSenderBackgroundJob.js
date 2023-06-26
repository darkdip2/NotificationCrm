const cron = require("node-cron");
const ticketNotification = require("../models/ticketNotification.model");
const Transporter = require("../notifier/emailService");

cron.schedule("*/30 * * * * *", async() =>{
  let mail = await ticketNotification.find({ status: "NOT_SENT" });
  mail.forEach((m) => {
    let mailList = m.recepientEmails;
    mailList.forEach((X) => {
      const emailObj = {
        from: "crmtestuser100@gmail.com",
        to: X,
        subject: m.subject,
        text: m.content
      };
      Transporter.sendMail(emailObj, async function (e, info) {
        if (e) console.log(e.message);
        else {
          m.status = "SENT";
          await m.save();
          console.log(info);
        }
      });
    });
  });
});
