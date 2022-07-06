const Discord = require('discord.js');

function stats(client, array, time){
  
  let type = ["PLAYING", "STREAMING", "LISTENING", "WATCHING"];
  let i = 0;
  let y = 0;

  if (!time) time = 15;
  setInterval(() => client.user.setActivity(`${array[i++ % array.length]}`, { type:  type[y++ % type.length]}), time*1000	)

}

function avatar(client, array, time){

  let i = 0;

  if (!time) time = 3;
  setInterval(() => client.user.setAvatar(`${array[i++ % array.length]}`), time*60000*60	)
    
}

module.exports = { stats, avatar }
