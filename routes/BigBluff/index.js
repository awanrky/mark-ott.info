exports.index = function (req, res) {
	res.render('BigBluff/index', { title: 'Big Bluff' });
};

exports.defaultaspx = function (req, res) {
	res.redirect('BigBluff');
}