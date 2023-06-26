const ticketNotification=require('../models/ticketNotification.model');

exports.acceptNotification=async(req,res)=>
{
    const notificationObject=
    {
        ticketId:req.body.ticketId,
        subject:req.body.subject,
        content:req.body.content,
        recepientEmails:req.body.recepientEmails,
        requester:req.body.requester
    }

    try{
        const notification=await ticketNotification.create(notificationObject);
        if(notification)
        {
            return res.status(201).send({
                requestId:notification._id,
                message:'Request has been accpeted.Check status later by using the provided requestId'
            });
        }
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json('Some Internal Server Error Occured');
    }
}   

exports.getNotification=async(req,res)=>
{
    const requestId=req.params.id;
    try{
        const notification=await ticketNotification.findOne({_id:requestId});
        if(notification)return res.status(200).send(notification);
        else return res.status(404).json('Notification does Not Exist');
    }
    catch(e)
    {
        return res.status(500).json('Internal Error');
    }
}