const Koa = require('koa');
const app = new Koa();
app.use(require('./rateLimit'));
app.use(function * () { // generator support going away in v3 in favor of async/await
    this.body = {"now": new Date()};
});

app.listen(3000);