const nodemailer=require('nodemailer');

const Transporter=nodemailer.createTransport({
    port:465,
    host:'smtp.gmail.com',
    auth:
    {
        user:'crmtestuser100@gmail.com',
        pass:'prnewdhgkslxnddu'
    },
    secure:true,
})

/* const emailObj={
    from:'crmtestuser100@gmail.com',
    to:'diptya99@gmail.com',
    subject:'Test email from CRM',
    text:'Hello!Welcome to CRM'
}

Transporter.sendMail(emailObj,async function(e,info)
{
    if(e)console.log(e.message);
    else console.log(info);
});
 */
module.exports=Transporter;