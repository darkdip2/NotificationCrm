const mongoose = require("mongoose");

const ticketNotificationSchema = new mongoose.Schema({
    ticketId:{type:String,required:true},
    subject:{type:String,required:true},
    content:{type:String,required:true},
    recepientEmails:{type:[String],required:true},
    status:{type:String,required:true,default:'NOT_SENT'},
    requester:{type:String},
    createdAt:{type:Date,immutable:true,default:Date.now()},
    updatedAt:{type:Date,default:Date.now()}
})

module.exports=mongoose.model('ticketNotification',ticketNotificationSchema);
