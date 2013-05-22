/**
 * Module dependencies.
 */

var express = require('express'),
		routes = require('./routes'),
		bigBluff = require('./routes/BigBluff'),
		http = require('http'),
		path = require('path');

var app = express();

app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
var poet = require( 'poet' )( app );

poet.set({
	postsPerPage : 3,
	posts : './blog/_posts',
	metaFormat : 'json'
}).createPostRoute( '/blog/post/:post', 'blog/post' )
	.createPageRoute( '/blog/pagination/:page', 'blog/page' )
	.createTagRoute( '/blog/tag/:tag', 'blog/tag' )
	.createCategoryRoute( '/blog/category/:category', 'blog/category' )
	.init();

// all environments
app.set('port', process.env.PORT || 3001);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(poet.middleware());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/default.aspx', routes.defaultaspx);

//app.get('/blog', routes.blog);
app.get( '/blog', function ( req, res ) { res.render( 'blog/index' ) });

app.get('/BigBluff', bigBluff.index);
app.get('/BigBluff/default.aspx', bigBluff.defaultaspx); // keep old links to this page from breaking by redirecting requests for this page to the /BigBluff path



http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
