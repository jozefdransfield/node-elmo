var Promise = require("bluebird");
var request = Promise.promisifyAll(require('request'));

module.exports.Elmo = function(options) {

  // generate a context id

  this.log = function(msg) {
    console.log(msg);

    if (options.ELMO_URL) {
      var target = options.ELMO_URL + "/api/log";
      return request.postAsync(target, {form: {message: msg}}).
        spread(function(resp, body) {
          if (resp.statusCode !== 200 && resp.statusCode !== 201) {
            throw body
          }
        });
    }

  }
}
