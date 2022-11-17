const { CommandInteraction, Interaction , MessageEmbed, Client } = require('discord.js') 

module.exports = {
    name: 'deposito',
    description: 'modulo da compilare per il deposito!',
    permissions: 'ADMINISTRATOR',
  
    /**
    @param {Client} client
    @param {CommandInteraction} interaction
    @param {String[]} args
    */

    run: async (client, interaction, args) => {
        interaction.followUp({ embeds: [new MessageEmbed().setTitle('**Deposito**').setDescription('modulo da compilare ogni qual volta venga depositato qualcosa \n**1) cosa è stato depositato? ...** \n **2) quando? ...**').setColor("RED")] })
    }
}
