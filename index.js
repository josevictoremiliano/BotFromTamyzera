const Discord = require('discord.js')
const Client = new Discord.Client({ /* Opciones */ });
const Config = require('./config.json')
    
Client.login(Config.token);