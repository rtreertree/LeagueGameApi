const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const https = require('https');

https.globalAgent.options.ca = fs.readFileSync(path.join(__dirname, '..', 'riot', 'riotgames.pem'), 'utf-8');


class httpClient{
    constructor(option = {}){
        this.baseUri = option.baseUri;
        this.defaultOptions = {
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            agent: new https.Agent({
                ca :fs.readFileSync(path.join(__dirname, '..', 'riot', 'riotgames.pem'), 'utf-8'),
            })
        };
    }

    async get(endpoint, options = {}) {
        console.log(`${this.baseUri}${endpoint}`);
        const data = await fetch(`${this.baseUri}${endpoint}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json', Accept: 'application/json'},
            options,
        });
        return data.json();
    }
}
module.exports.httpClient = httpClient;