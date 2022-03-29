module.exports = (client, message) => {
    // Ignore all bots
    if (message.author.bot) return;

    // ignore if the id is not the author of the bot
    if (message.author.id != client.config.ownerID && message.author.id != "813070252703219722") return message.channel.send("Sorry! Bot is under construction \:blush: ").catch(console.error);;
      
    // Ignore in other channel name
    if (!message.channel.name.includes("chillvibes-bot")) return ; 
  
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
  
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) return;
  
    // Run the command
    cmd.run(client, message, args);
  };