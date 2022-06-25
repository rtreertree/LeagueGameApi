const https = require('https');
const fs = require('fs');
const path = require('path');


class GameClient {
    constructor(httpClient){
        this.httpClient = httpClient;
    }

    async getEvents(){
        const res = await this.httpClient.get('/liveclientdata/activeplayer');
        return res;
    }
}

module.exports.GameClient = GameClient; 