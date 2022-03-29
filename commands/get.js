exports.run = (client, message, args) => {
    console.log(args[0])
    let user = client.users.cache.get(args[0]);
    console.log(user)
}

exports.name = "get";