const dotenv = require('dotenv');
const Discord = require('discord.js');
const client = new Discord.Client();

dotenv.config();

client.on('ready', () => {
    console.log("Bot encendido");
});

client.on('message', message => {
    if(message.content.startsWith("#")){
        let fullCommand = message.content.substring(1).trim().split(" ");
        let command = fullCommand[0];
        let params = fullCommand.slice(1)
        message.channel.send(`${message.author} comando activado: ${command}`);
        message.channel.send(`parametros del comando: ${params}`)
    };
});

client.login(process.env.TOKEN);