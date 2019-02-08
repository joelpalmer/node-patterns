const WebSocketServer = require('ws').Server;

// static file server
const server = require('http').createServer(
    require('ecstatic') ({root: `${__dirname}/www`})
);

const wss = new WebSocketServer({server});
wss.on('connection', ws => {
    console.log('Client Connected');
    ws.on('message', msg => {
        console.log(`Message: ${msg}`);
        BroadcastChannel(msg);
    });
});

function broadcast(msg) {
    wss.clients.forEach(client => {
        client.send(msg);
    });
}

server.listen(process.argv[2] || 8080);