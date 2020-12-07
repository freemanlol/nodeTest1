const WebSoket = require('ws');

const server = new WebSoket.Server({port:3000})
server.on('connection', ws => {
    // ws.send('Добро пожаловать!')
    ws.on('message', message => {
        // message
        server.clients.forEach(elem => {
            if (elem.readyState === WebSoket.OPEN) {
                elem.send(message);
            }
        })    
    })
})

