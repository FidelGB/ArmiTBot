const Discord = require('discord.js');
const { join } = require('./join.js');
const { leave } = require('./leave.js');
const { addCola } = require('./play.js');
const { deleteQueue } = require('./play.js');
const { skipSong } = require('./play.js');
const { pause } = require('./play.js');
const { resume } = require('./play.js');


/**
 * @param {Array} params - Parametros del comando
 * @param {Discord.Message} message - Datos del mensaje
 */
 const music = async (params, message) => {
    command = params[0];
    params = params.slice(1);
    switch(command){
        case 'join': this.connection = await join(message, this.connection); break;
        case 'leave': this.connection = leave(message, this.connection); deleteQueue(); break;
        case 'play': this.connection = await addCola(params, message, this.connection); break;
        case 'skip': await skipSong(message, this.connection); break;
        case 'pause': pause(message, this.connection); break;
        case 'resume': resume(message, this.connection); break;
    }
};

module.exports = {
    music: music
};


