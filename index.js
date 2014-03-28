module.exports.connect = {
  elmo : require("./lib/connect").elmo
}

module.exports.logger = function() {
  return process.domain.logger;
}
