function getSpec(region = process.env.AWS_REGION) {
  return require(`./${region}`);
}

/*
 * Exports.
 */
exports.getSpec = getSpec;
exports.urls = require('./urls');
