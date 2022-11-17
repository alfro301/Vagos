const { user } = require("../index");
const client = require("../index");

client.on("ready", () =>
    console.log(`${client.user.tag} è online!`)
    
);
