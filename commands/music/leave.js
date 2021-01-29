const Discord = require('discord.js');

/**
 * @param {Array<String>} params - Parametros del comando
 * @param {Discord.Message} message - Datos del mensaje
 * @param {Discord.VoiceConnection} connection - Conexión al chat de voz
 */
let leave = (message, connection) => {
    if(connection != null){   
        connection.disconnect();
        message.react('🆗');
        return null;
    }else{
        message.channel.send(`${message.member} no estoy en un canal de voz`)
        return connection;
    }
}

module.exports = {
    leave: leave
}