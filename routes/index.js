
exports.index = function (req, res) {
//	res.render('index', { title: 'While this' });
    res.redirect('/about-me');
};

exports.defaultaspx = function (req, res) {
//	res.redirect('/');
    res.redirect('/about-me');
};

exports.blog = function (req, res) {
	res.render('blog', { title: 'while (this) { blog(); }'});
};

exports.aboutMe = function (req, res) {
    res.render('about-me', { title: 'while (this) { about(); }'});
};