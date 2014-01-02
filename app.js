var express = require('express')
    , http = require('http')
    , controller = require('./routes/controller')
    , path = require('path')
    , app = express(),
     RedisStore = require('connect-redis')(express);

// all environments
app.set('port', process.env.PORT || 4500);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.favicon());
app.use(express.logger('dev'));

app.set('models', require('./models') );

app.use(express.bodyParser({ keepExtensions: true, uploadDir: '/uploads' }));
app.use(express.multipart());
app.use(express.methodOverride());
app.use(express.cookieParser('asdasdasd'));
app.use(express.cookieSession());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

controller(app);

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
