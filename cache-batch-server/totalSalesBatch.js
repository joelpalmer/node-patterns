const totalSales = require('./totalSales');

const queues = {};
module.exports = function totalSalesBatch(item, callback) {
    if (queues[item]) {
        console.log('Batching Op');
        return queues[item].push(callback);
    }

    queues[item] = [callback];
    totalSales(item, (err, res) => {
        const queue = queues[item];
        queues[item] = null;
        queue.forEach(cb => cb(err, res));
    });
};