const elasticsearch = require('elasticsearch');
const logger = require('../lib/logger');
const { services: { elasticSearch: config } } = require('config');

function esLogger() {
  // config is the object passed to the client constructor.
  this.error = logger.error.bind(logger);
  this.warning = logger.warn.bind(logger);
  this.info = logger.info.bind(logger);
  this.debug = logger.debug.bind(logger);

  /* istanbul ignore next */
  this.trace = function(
    method,
    requestUrl,
    body,
    responseBody,
    responseStatus
  ) {
    logger.trace({
      method: method,
      requestUrl: requestUrl,
      body: body,
      responseBody: responseBody,
      responseStatus: responseStatus,
    });
  };

  /* istanbul ignore next */
  this.close = function() {
    /* loggeryan's loggers do not need to be closed */
  };
}

const client = new elasticsearch.Client(
  Object.assign({ log: esLogger }, config)
);

module.exports = { health: client.ping.bind(client) };
