const Koa = require('koa');
const app = new Koa();
app.use(function * () { // generator support going away in v3. Need to investigate
    this.body = {"now": new Date()};
});

app.listen(3000);