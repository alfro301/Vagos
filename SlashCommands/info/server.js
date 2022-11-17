const { CommandInteraction, Interaction , MessageEmbed, Client, Message } = require('discord.js') 

module.exports = {
    name: 'server',
    description: 'In che server giochiamo?',
    permissions: 'ADMINISTRATOR',

    
    /**
    @param {Client} client
    @param {CommandInteraction} interaction
    @param {String[]} args
    */

    run: async (client, interaction, args) => {

interaction.followUp({ embeds: [new MessageEmbed().setTitle('**In che server giochiamo?**').setDescription('**Questo è il server nel quale giochiamo** \n https://discord.gg/ethernrp\n**ENTRA SUBITO**').setFooter("developed by alfro").setColor('#00e7ff')] })

    }
}
