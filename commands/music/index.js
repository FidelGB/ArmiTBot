const Discord = require('discord.js');
const { join } = require('./join.js');
const { leave } = require('./leave.js');

/**
 * @param {Array} params - Parametros del comando
 * @param {Discord.Message} message - Datos del mensaje
 */
 let music = async (params, message) => {
    command = params[0];
    params = params.slice(1);
    switch(command){
        case 'join': this.connection = await join(message, this.connection); break;
        case 'leave': this.connection = leave(message, this.connection); break;
    }
};

module.exports = {
    music: music
};


