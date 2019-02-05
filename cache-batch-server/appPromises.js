const http = require('http');
const url = require('url');
const totalSales = require('./totalSalesPromises');

http.createServer(function(req, res) {
    const query = url.parse(req.url, true).query;
    totalSales(query.item).then(function(sum) {
        res.writeHead(200);
        res.end(`Total sales for item ${query.item} is ${sum}`);
    });
}).listen(8000, () => console.log('Started'));

// // 4044ms with promises (in between batch/no-cache and batch/cache)