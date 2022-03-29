module.exports = (client) => {
    client.user.setActivity(`on ${client.guilds.cache.size} servers`);
    console.log(`Ready to serve on ${client.guilds.cache.size} servers, for ${client.users.cache.size} users.`);
    //client.user.setActivity("my code", { type: "WATCHING"})
}


// // Set the bot's online/idle/dnd/invisible status
// client.on("ready", () => {
//     client.user.setStatus("online");
// });

// // Set the bot's presence (activity and status)
// client.on("ready", () => {
//     client.user.setPresence({
//         activities: [{ 
//           name: "my code",
//           type: "WATCHING"
//         }],
//         status: "idle"
//     })
// })