const zmq = require('zeromq');
const zmqMiddlewareManager = require('./zmqMiddlewareManager');
const jsonMiddleware = require('./jsonMiddleware');
const reply = zmq.socket('rep');
reply.bind('tcp://127.0.0.1:5000');

const zmqm = new zmqMiddlewareManager(reply);
zmqm.use(jsonMiddleware());

zmqm.use({
    inbound: function (message, next) {
        console.log('Received: ', message.data);
        if (message.data.action === 'ping') {
            this.send({action: 'pong', echo: message.data.echo});
        }
        next();
    }
});