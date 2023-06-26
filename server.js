const dbConfig=require('./configs/db.config');
const serverConfig=require('./configs/server.config');
const mongoose=require('mongoose');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
require('./crons/emailSenderBackgroundJob');

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error while connecting to db");
});

db.once("open", () => {
  console.log("Connected to mongo db");
});

require('./routes/ticketNotification.route')(app);

app.listen(serverConfig.PORT,()=>
{
    console.log('Application listening to request on port number '+serverConfig.PORT);
})


