const { Client, Intents } = require('discord.js')
const { buildProfile } = require('./helpers')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.once('ready', () => { console.log('Ready!') })

client.on('messageCreate', message => {
  if (message.author.bot) return
  if (message.content === 'what is my id') {
    message.channel.send('hello')
    buildProfile(message.author, message)
  }
})

client.login(process.env.DISCORD_BOT_TOKEN)
