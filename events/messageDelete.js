const { Permissions } = require("discord.js");

module.exports = async (client, message) => {
//     // Firstly, we need a logs channel. 
//     let logs = message.guild.channels.cache.find(channel => channel.name === "logs");

//   // If there is no logs channel, we can create it if we have the 'MANAGE_CHANNELS' permission
//   // Remember, this is completely options. Use to your best judgement.
//   if (message.guild.me.permissions.has(Permissions.FLAGS.MANAGE_CHANNELS) && !logs) {
//     logs = await message.guild.channels.create("logs", { type: "GUILD_TEXT" }).catch(console.error);
//   }

//   // If we do not have permissions, console log both errors
//   if (!logs) { 
//     return console.log("The logs channel does not exist and cannot be created");
//   }

//   /*
//   Lets establish who deleted the message. This is the actual audit logs part, yay!
//   The "type" is how you will be searching through the audit logs, like role 
//   updates or members banned. A complete list of types can be found at the end of this page.
//   Keep in mind the following line uses some advanced async/await promise manipulation. 
//   Explaining exactly how this works is beyond the scope of this guide.
//   */
//   const entry = await message.guild.fetchAuditLogs({ type: "MESSAGE_DELETE" }).then(audit => audit.entries.first())
//   console.log(entry)

//   // Define an empty user for now. This will be used later in the guide.
//   let user;

//   if (entry.extra.channel.id === message.channel.id && entry.target.id === message.author.id && entry.createdTimeStamp > (Date.now() - 5000) && entry.extra.count >= 1){
//       user = entry.executor.username
//   }
//   else{
//       user = message.author.username
//   }

//     // We defined the logs channel earlier in this guide, so now we can send it to the channel!
//     logs.send(`A message was deleted in ${message.channel.name} by ${user}`);
}
