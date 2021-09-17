function buildProfile (user, msg) {
  msg.channel.send(user.id)
}

module.exports = { buildProfile }
