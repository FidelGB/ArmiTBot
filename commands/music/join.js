const Discord = require('discord.js');

/**
     * @param {Array} params - Parametros del comando
     * @param {Discord.Message} message - Datos del mensaje
     * @param {Discord.VoiceConnection} connection - Conexión al chat de voz
*/
let join = async (message, connection) => {
    if(connection == null){
        if(message.member.voice.channel){
            return await message.member.voice.channel.join();
        }else{
            message.channel.send(`${message.author} necesitas estar en un canal de voz`);
            return connection;
        }
    }else{
        message.channel.send(`${message.author} actualmente estoy sirviendo en el canal de ${connection.channel.name}`)
        return connection;
    }
}

module.exports = {
    join: join
}