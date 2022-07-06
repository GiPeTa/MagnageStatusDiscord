
const Discord = require("discord.js"); 
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_EMOJIS_AND_STICKERS", "GUILD_INTEGRATIONS", "GUILD_MESSAGE_REACTIONS", "GUILD_PRESENCES"], partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.on("ready", async () => { 
  
  console.log('Bot ligado!');
  
  const random = require('./status.js');
  random.stats(client, ["status one", "status two"], 20 * 1000) //Substitua o "20" pelo tempo em segundos que deseja trocar o status;
})

client.login('TOKEN').resolve
