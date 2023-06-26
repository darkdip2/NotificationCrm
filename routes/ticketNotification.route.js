const ticketNotificationController=require('../controller/ticketNotification.controller');

module.exports=function(app)
{
    app.post('/notificationService/api/v1/notification',ticketNotificationController.acceptNotification);
    app.get('/notificationService/api/v1/notification/:id',ticketNotificationController.getNotification);

}