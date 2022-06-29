const tmi = require('tmi.js');
require('dotenv/config');

const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: 'inspetordegaita',
        password: process.env.token,
    },
    channels: ['karennovaesd']
});
client.connect();
client.on('message', (channel, tags, message, self) => {
    let palavras = message.toLowerCase().split(" ");
    let expressoes = { 
        incorretas: [ 'sanfona', 'tangerina', 'mandioca', 'há pouco', 'preocupado','preocupada','preocupade', 'pão francês', 'susto', 'churrasco', 'refrigerante', 'atrasado', 'atrasada','chifre', 'menino', 'menina', 'ladeira', 'brigadeiro', 'reais', 'lombada', 'chicote', 'semáforo', 'misto quente'],
        corretas: [ 'gaita', 'bergamota', 'aipim', 'arrecém', 'atucanado','atucanada','atucanade',   'capaz', 'cacetinho', 'cagaço', 'churras,', 'refri', 'em cima do laço', 'guampa', 'guri', 'guria', 'lomba', 'negrinho', 'pila', 'quebra-mola', 'relho', 'sinaleira', 'torrada']};

    palavras.forEach(function (palavra) {
        expressoes.incorretas.forEach(function(palavraIncorreta, index){
            if (palavra == palavraIncorreta) {
                client.action("karennovaesd", `${tags['display-name']} Usou uma palavra proibida! É ${expressoes.corretas[index].toUpperCase()}`);
            }
            
        })

    });
});