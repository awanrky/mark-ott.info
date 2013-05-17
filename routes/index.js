
exports.index = function (req, res) {
	res.render('index', { title: 'While this' });
};

exports.defaultaspx = function (req, res) {
	res.redirect('/');
};

exports.blog = function (req, res) {
	res.render('blog', { title: 'while (this) { blog(); }'});
};