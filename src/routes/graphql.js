const Router = require('koa-router');
const { graphqlKoa, graphiqlKoa } = require('apollo-server-koa');

const router = new Router();

router.post('/graphql', graphqlKoa({ schema: {} }));
router.get('/graphql', graphqlKoa({ schema: {} }));

router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

module.exports = router;
