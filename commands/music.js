const Discord = require('discord.js');

/**
 * @param {Array} params - Parametros del comando
 * @param {Discord.Message} message - Datos del mensaje
 */
let music = (params, message) => {
    command = params[0];
    params = params.slice(1);
    switch(command){
        case 'join': join(params, message); break;
        case 'leave': leave(params, message); break;
    }
}

/**
 * @param {Array} params - Parametros del comando
 * @param {Discord.Message} message - Datos del mensaje
 */
let join = async (params, message) => {
    if(this.connection == null){
        if(message.member.voice.channel){
            this.connection = await message.member.voice.channel.join();
        }else{
            message.channel.send(`${message.author} necesitas estar en un canal de voz`);
        }
    }else{
        message.channel.send(`${message.author} actualmente estoy sirviendo en el canal de ${this.connection.channel.channel}`)
    }
};

/**
 * @param {Array} params - Parametros del comando
 * @param {Discord.Message} message - Datos del mensaje
 */
let leave = async(params, message) => {
    if(this.connection != null){   
        this.connection.disconnect();
        this.connection = null;
        message.react('🆗');
    }else{
        message.channel.send(`${message.member} no estoy en un canal de voz`)
    }
};

module.exports = music;