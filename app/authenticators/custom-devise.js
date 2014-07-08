import DeviseAuthenticator from 'simple-auth-devise/authenticators/devise';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: 'http://localhost:3000/users/sign_in'
});
