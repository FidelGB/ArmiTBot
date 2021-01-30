const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const {join} = require('./join');
const {getResultsYoutube} = require('../helper.js');

/**
 * @param {Array<String>} params - Parametros del comando
 * @param {Discord.Message} message - Datos del mensaje
 * @param {Discord.VoiceConnection} connection - Conexión al chat de voz
 * @returns {Discord.VoiceConnection} - Conexión modificada del chat de voz
 */
const play = async (params, message, connection) => {
    let search = params.join(" ").trim();
    if(params.length != ""){
        let results = (await getResultsYoutube(search));
        if(results.error){
            message.channel.send("Error: "+results.error);
        }else if(results.all.length != 0){
            if(this.cola == null || this.cola.length == 0){
                this.cola = results.all;
            }else{
                this.cola.push(results.all);
            }
            if((results.all.length == 1 && this.cola.length > 1) || (connection?.speaking && results.all.length == 1)){
                message.channel.send(`Agregada "${results.all[0].title}" a la cola (Por: ${message.author})`);
            }else if(results.all.length > 1){
                message.channel.send(`Agregadas ${results.all.length} canciones a la cola (Por: ${message.author})`);
            }
            if(!connection?.speaking){
                connection = await sonarCancion(this.cola[0], message, connection);
                this.cola.shift();
            }
            results = null;
        }
        console.log("Cola:");
        console.log(this.cola);
        return connection;
    }else{
        message.channel.send("Parametros invalidos")
    }
}

const deleteQueue = () => {
    this.cola = null;
}

/**
 * 
 * @param {JSON} cancion - informacion de la cancion a reproducir 
 * @param {Discord.Message} message - Datos del mesaje  
 * @param {Discord.VoiceConnection} connection - Conexión al chat de voz
 * @returns {Discord.VoiceConnection} - Conexión modificada del chat de voz 
 */
const sonarCancion = async (cancion, message, connection) => {
    if(cancion?.url == null){
        cancion = (await getResultsYoutube(`v=${cancion.videoId}`)).all[0];
    }

    if(connection == null){

        connection = await join(message, connection);
    }

    connection.play(ytdl(cancion.url, {filter: 'audioonly', quality: 'highestaudio'}));
    message.channel.send(`Reproduciendo: ${cancion.title}`);
    
    return connection;
}

module.exports = {
    play: play,
    deleteQueue: deleteQueue
}