/**
 * Module dependencies.
 */

var express = require('express'),
		routes = require('./routes'),
		bigBluff = require('./routes/BigBluff'),
		http = require('http'),
		winston = require('winston'),
		expressWinston = require('express-winston'),
//		winstonMongoDb = require('winston-mongodb').MongoDB,
		path = require('path');

console.log(process.env.NODE_ENV);

//if ('development' == process.env.NODE_ENV) {
//	var mongoLoggerOptions = {
//		db: 'MarkOttInfoLogsDevelopment',
//		collection: 'logger'
//	};
//}
//
//if ('test' == process.env.NODE_ENV) {
//	var mongoLoggerOptions = {
//		db: 'MarkOttInfoLogsTest',
//		collection: 'logger'
//	};
//}
//
//if ('production' == process.env.NODE_ENV) {
//	var mongoLoggerOptions = {
//		db: 'nodejitsu_awanrky_nodejitsudb7307883843',
//		collection: 'logger',
//		password: process.env.MONGOPW,
//		host: 'ds059917.mongolab.com',
//		port: 59917
//	};
//}



var app = express();

app.use(expressWinston.logger({
	transports: [
		new winston.transports.Console({
			json: true,
			colorize: true
		})
//		new winstonMongoDb(mongoLoggerOptions)
	]
}));

app.use(express.favicon(__dirname + '/public/images/favicon.ico'));

var poet = require( 'poet' )( app, {
	postsPerPage : 5,
	posts : './blog/_posts',
	metaFormat : 'json',
	routes: {
		'/blog/post/:post': 'blog/post',
		'/blog/pagination/:page': 'blog/page',
		'/blog/tag/:tag': 'blog/tag',
		'/blog/category/:category': 'blog/category'
	}
});

poet.init();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
//app.use(poet.middleware());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
//
app.use(expressWinston.errorLogger({
	transports: [
		new winston.transports.Console({
			json: true,
			colorize: true
		})
//		,
//		new winstonMongoDb(mongoLoggerOptions)
	]
}));

// development only
//if ('development' == app.get('env')) {
	app.use(express.errorHandler());
//}

app.get('/', routes.index);
app.get('/default.aspx', routes.defaultaspx);

app.get('/about-me', routes.aboutMe);

app.get('/dogs-life', routes.dogsLife);
app.get('/dogs-life/about', routes.dogsLife.about);
app.get('/dogs-life/pace-bend-park', routes.dogsLife.paceBendPark);
app.get('/dogs-life/enchanted-rock', routes.dogsLife.enchantedRock);

app.get( '/blog', function ( req, res ) { res.render( 'blog/index' ) });

app.get('/BigBluff', bigBluff.index);
app.get('/BigBluff/default.aspx', bigBluff.defaultaspx); // keep old links to this page from breaking by redirecting requests for this page to the /BigBluff path



http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
