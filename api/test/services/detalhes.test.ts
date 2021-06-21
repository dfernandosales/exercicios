import assert from 'assert';
import app from '../../src/app';

describe('\'detalhes\' service', () => {
  it('registered the service', () => {
    const service = app.service('detalhes');

    assert.ok(service, 'Registered the service');
  });
});
