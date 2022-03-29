const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");
const discordTTS = require('discord-tts');

exports.run = async (client, msg, args) => {
    try {
        let text = await args.join(' ')
        let voiceConnection;
        const audioPlayer = new AudioPlayer();

        const stream=discordTTS.getVoiceStream(text, {lang: "id"});
        const audioResource=createAudioResource(stream, {inputType: StreamType.Arbitrary, inlineVolume:true});
        if(!voiceConnection || voiceConnection?.status===VoiceConnectionStatus.Disconnected){
        voiceConnection = joinVoiceChannel({
            channelId: msg.member.voice.channelId,
            guildId: msg.guildId,
            adapterCreator: msg.guild.voiceAdapterCreator,
        });
        voiceConnection= await entersState(voiceConnection, VoiceConnectionStatus.Connecting, 5_000);
    }
    
    if(voiceConnection.status===VoiceConnectionStatus.Connected){
        voiceConnection.subscribe(audioPlayer);
        audioPlayer.play(audioResource);
    }   
    } catch (error) {
        console.log(error)
    }
}
exports.name = "say";