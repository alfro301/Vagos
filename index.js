const { Client, Collection, MessageEmbed, WebhookClient, GuildMember, Message,  SlashCommandBuilder} = require (`discord.js`);

const client = new Client({
    intents: 32767,
});
const token = require ("./config.json")
client.login("MTA0MjUxNzc2ODU5Mjk1MzQxNA.GYnjdZ.EwDJDciDsAFmOqEjK0CwEcFmWcNDJ5PuS1_KGo")
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();

client.on("ready", () =>{
    client.user.setActivity("VAGOS", {type:"PLAYING"})
} )


// Initializing the project
require("./handler")(client);


