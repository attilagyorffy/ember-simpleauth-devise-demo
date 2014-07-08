import Authenticator from 'simpleauth-demo/authenticators/custom-devise';

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize: function(container, application) {
    container.register('authenticator:custom-devise', Authenticator);
  }
};
