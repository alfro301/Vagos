const { CommandInteraction, Interaction , MessageEmbed, Client } = require('discord.js') 

module.exports = {
    name: 'radio',
    description: 'comando per visualizzare vixsma nudo',
    permissions: 'ADMINISTRATOR',
    
    
    /**
    @param {Client} client
    @param {CommandInteraction} interaction
    @param {String[]} args
    */

    run: async (client, interaction, args) => {
        interaction.followUp({ embeds: [new MessageEmbed().setTitle('**radio 150.1**').setDescription('**radio mafia ufficiale!**').setColor("RED")] })

    }
}
