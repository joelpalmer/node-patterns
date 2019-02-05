const http = require('http');
const url = require('url');
const totalSales = require('./totalSalesCache');

http.createServer((req, res) => {
    const query = url.parse(req.url, true).query;
    totalSales(query.item, (err, sum) => {
        res.writeHead(200);
        res.end(`Total sales for item ${query.item} is ${sum}`);
    });
}).listen(8000, () => console.log('Started'));

// 4243ms no caching or batching
// 4048ms batching but no caching <= seems like this should be faster 🤔
// 4038ms batching and caching <= not much improvement
