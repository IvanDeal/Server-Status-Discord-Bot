const Discord = require('discord.js');
const util = require('minecraft-server-util');
const arkservers = require('arkservers');

const bot = new Discord.Client();

const token = '*************************';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('Server Status bot online!');
})

bot.on('message', msg =>{
    if(msg.content === "Hello"){
        msg.reply('Hello Friend. How can I help?');
    }
})

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");
    
    switch(args[0]){
        case 'status':
            util.status('*************').then((response) =>{
                const Embed = new Discord.MessageEmbed()
                .setTitle('Server Status')
                .addField('Server IP', response.host)
                .addField('Server Version', response.version)
                .addField('Online Players', response.onlinePlayers)
                .addField('Max Players', response.maxPlayers)

                message.channel.send({embed: Embed})
                
            })
            .catch((error) =>{
                throw error;
            });
        break;
    }
})

bot.login(token);

