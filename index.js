const dotenv = require('dotenv');
const Discord = require('discord.js');
const music = require('./commands/music.js');
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
        switch(command){
            case 'music': music(params, message); break;
        }
    };
});

client.login(process.env.TOKEN);