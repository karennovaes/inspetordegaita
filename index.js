const tmi = require('tmi.js');

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: 'inspetordegaita',
        password: process.env.token
    },
    channels: ['karennovaesd']
});

client.connect();

client.on('message', (channel, tags, message, self) => {
    var mensagem = new Array();
    mensagem = message.toLowerCase().split(" ");
    if (mensagem.includes("sanfona")) {
        client.action("karennovaesd", tags['display-name'] + " Usou a palavra proibida! É GAITAAAAAA");
    }

});