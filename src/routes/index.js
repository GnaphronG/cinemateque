const Router = require('koa-router');
const stdRouter = require('./std');
const graphQLRouter = require('./graphql');
const v1Router = require('./v1');
const router = new Router();

router.use(stdRouter.routes());
router.use(graphQLRouter.routes());
router.use('/v1', v1Router.routes());

module.exports = router;
