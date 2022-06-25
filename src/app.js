const {httpClient} = require('./http');
const {GameClient} = require('./riot/client');
const {WebSocketServer} = require('ws');

//const BASE_URL = 'https://127.0.0.1:2999';

//const gameClient = new GameClient(new httpClient({baseUri: BASE_URL}));

const wss = new WebSocketServer({port: 3000});
wss.on('connection', (ws, request, client) => { 
    console.log(ws, request, client);
});