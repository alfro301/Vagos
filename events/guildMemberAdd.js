const {MessageEmbed, WebhookClient, GuildMember } = require ("discord.js");



module.exports = {
    name: "guildMemberAdd",
    /**
     * 
     * @param {GuildMember} member 
     */
    execute(member) {

        const {user, guild} = member
        member.roles.add("1042526179262992435")

//https://discord.com/api/webhooks/1042569181939367978/0RWGFXxBd9_WzsE_xLeW7Zu0JvS52b2ra0761KUloqdtKKVGwofdJitFw0AaeyWLK-_e//
        const Welcomer = new WebhookClient({
            id: "1042569181939367978",
            token: "0RWGFXxBd9_WzsE_xLeW7Zu0JvS52b2ra0761KUloqdtKKVGwofdJitFw0AaeyWLK-_e"
        })
        const URL = "https://cdn.discordapp.com/attachments/996546772086313080/1042557508369264670/BA7EFFC7-8404-4608-A345-0F7347F8DCEB.jpg"
        const Welcome = new MessageEmbed()
     .setColor("RED")
     .setAuthor(user.tag, user.avatarURL({dynamic: true, size: 500}))
     .setDescription("benvenuto nel server")
     .setImage(URL)
     Welcomer.send({embeds: [Welcome]}) 
    }
       
}