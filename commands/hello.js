exports.run = (client, message, args) => {
    let user = client.users.cache.get(args[0]);
    
    console.log(user)
}