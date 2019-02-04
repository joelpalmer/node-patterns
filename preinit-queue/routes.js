const asyncModule = require('./asyncModuleWrapper');

module.exports.time = (req, res) => {
    asyncModule.returnTime((err, time) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error: ' + err.message);
        }
        res.writeHead(200);
        res.end('The time is ' + time);
    });
};