const Discord = require('discord.js');
const client = new Discord.Client();
const getYoutubeID = require("get-youtube-id");
const fetchVideoInfo = require("youtube-info");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const yt = require("ytdl-core");

client.on("voiceStateUpdate", (oldMember, newMember) => {
  if (
    oldMember.voiceChannel === undefined &&
    newMember.voiceChannel !== undefined
  ) {
    const voiceChannel = client.channels.get("647593579082154015");
    voiceChannel.join().then(connnection => {
      let disp = yt("https://www.youtube.com/watch?v=TVo_H8fAN9k", {
        audioonly: true
      });
      const dispatcher = connnection.playStream(disp);
    });
  } else if (newMember.voiceChannel === undefined) {
    const voiceChannel = client.channels.get("647593579082154015");
    voiceChannel.leave();
  }
});

client.login("NTQzODY4MDEzMDkxNDg3Nzc1.Xdh5AQ.x83dDiX8Upm9OjHdjLUhBSVTF-w");