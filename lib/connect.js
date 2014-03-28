var Elmo = require("./elmo").Elmo;
var domain = require('domain');

module.exports.elmo = function(options) {
	return function(req, res, next) {
		var elmo = new Elmo(options);
    var d = domain.create();
		d.run(function() {
      process.domain.logger = elmo;
      next();
    });
	};
};
