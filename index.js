const { Client, Intents } = require('discord.js')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.once('ready', () => { console.log('Ready!') })

client.on('messageCreate', message => {
  if (message.author.bot) return
  if (message.content === 'hello') {
    message.channel.send('hello')
  }
})

client.login(process.env.DISCORD_BOT_TOKEN)
