const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config')

client.on('ready', () => {
	console.log('I am ready!')
})

client.on('message', (message) => {
	console.log(message.content)
	if(message.content === 'Kappa') {
		message.reply('Keepo')
	}
	if(message.content === 'ping') {
		message.reply('pong')
	}
})

client.login(config.bot_token)