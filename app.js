const Kao = require('koa');
const app = new Kao();
const bodyParser = require('koa-bodyparser');
const session = require('koa-session');
const keys = require('./config/keys');

app.keys = keys.session.cookieKey;

app.use(bodyParser());
app.use(session({
    maxAge: 24 * 60 * 60 * 1000
},app));

const port = keys.env.port || 8080;
app.listen(port, () => {
    console.log('Server is started and listening on port: ' + port);
})