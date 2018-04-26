const app = require('../src/app');
const { server: config } = require('config');

describe('server', () => {
  const sandbox = sinon.createSandbox();

  beforeEach(function() {
    sandbox.stub(config, 'port').value(0);
  });

  afterEach(function() {
    sandbox.restore();
  });

  it('Should load the server on config.port', () => {
    const c = sandbox.stub(app, 'callback');
    sandbox.stub(config, 'stopSignals').value(['SIGUSR2']);

    require('../src/server');
    process.kill(process.pid, 'SIGUSR2');
    expect(c).to.have.been.calledOnce;
  });
});
