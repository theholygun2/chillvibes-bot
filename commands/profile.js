exports.run = (client, message) => {
    let user = message.author
    
    let imageBaseUrl = 'https://cdn.discordapp.com'
    let userAvatarPath = `avatars/${user.id}/${user.avatar}`
    let avatarUrl = `${imageBaseUrl}/${userAvatarPath}.jpg`

    message.channel.send({ embeds: [{
        color: 3447003,
        author: {
            name: user.username,
            icon_url: "https://i.imgur.com/NQ3knjY.jpeg"
    },
    thumbnail: {
      url: avatarUrl
    },
    image: {
    url: avatarUrl
    },
    title: "",
    url: "",
    description: "Description",
    fields: [{
    name: "This is a single field title, it can hold 256 characters",
    value: "This is a field value, it can hold 1024 characters.",
    inline: false
    },
    {
    name: "\u200b",
    value:"\u200b"
    }],
    timestamp: new Date(),
    footer: {
    text: "This is the footer text, it can hold 2048 characters"
    }
    }]});
}

exports.name="profile"

// message.channel.send({ embeds: [{
//     color: 3447003,
//     author: {
//         name: "Author Name, it can hold 256 characters",
//         icon_url: "https://i.imgur.com/lm8s41J.png"
// },
// thumbnail: {
//   url: "http://i.imgur.com/p2qNFag.png"
// },
// image: {
// url: "http://i.imgur.com/yVpymuV.png"
// },
// title: "This is your title, it can hold 256 characters",
// url: "https://discord.js.org/#/docs/main/master/class/MessageEmbed",
// description: "This is the main body of text, it can hold 2048 characters.",
// fields: [{
// name: "This is a single field title, it can hold 256 characters",
// value: "This is a field value, it can hold 1024 characters.",
// inline: false
// },
// {
// name: "Inline fields",
// value: "They can have different fields with small headlines, and you can inline them.",
// inline: true
// },
// {
// name: "Masked links",
// value: "You can put [masked links](https://discord.js.org/#/docs/main/master/class/MessageEmbed) inside of rich embeds.",
// inline: true
// },
// {
// name: "Markdown",
// value: "You can put all the *usual* **__Markdown__** inside of them.",
// inline: true
// },
// {
// name: "\u200b",
// value:"\u200b"
// }],
// timestamp: new Date(),
// footer: {
// icon_url: "http://i.imgur.com/w1vhFSR.png",
// text: "This is the footer text, it can hold 2048 characters"
// }
// }]});