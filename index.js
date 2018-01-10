const express = require('express');
const reload = require('reload');
const watch = require('watch');
const bodyParser = require('body-parser');

const app = express();
const router = require('./router')(express);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

reloadServer = reload(app);
watch.watchTree(__dirname + "/client/dist", function (f, curr, prev) {
    // Fire server-side reload event 
    reloadServer.reload();
});

app.use(express.static('client/dist'));

app.use(function(req, res, next) {
    res.sendFile(__dirname + "/client/dist/index.html");
})

app.listen(8080);