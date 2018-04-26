const { hostname } = require('os');
//const { services } = require('config');
const { name, version } = require('../lib/package');

const server = { name, version, hostname: hostname() };

async function health(ctx) {
  ctx.set('Cache-Control', 'no-cache');
  ctx.body = Object.assign({ status: 'up' }, { server });
}

module.exports = health;
