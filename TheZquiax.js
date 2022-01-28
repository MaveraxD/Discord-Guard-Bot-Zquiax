const { Client } = require("discord.js");
const client = global.Client = new Client({ fetchAllMembers: true});
require('discord.-reply');
const settings = require("./settings.json");

const mongoose = require("mongoose");
mongoose.connect(settings.Mongoose.DatabaseUrl.replace("<dbname>"), Settings.Mongoose.DatabaseName), {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false
 };
 mongoose.connection.on("connected", () => { console.log (`[Mongoose] MongoDB'ye başarıyla bağlandım`)
 require("./Zquiax/Guard.js");
 require("./Zquiax/Async.js");
 require("./Zquiax/Backup.js")

 });