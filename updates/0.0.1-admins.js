var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'Admin',
			last: 'User'
		},
		email: 'admin@keystonejs.com',
		password: 'admin',
		isAdmin: true
	})
	.save(done);
};
