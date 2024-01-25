const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['header', 'https://saswatiaccenture.github.io/mfa-nx-fed/header'],
    ['side-nav', 'https://saswatiaccenture.github.io/mfa-nx-fed/side-nav'],
    [
      'item-details',
      'https://saswatiaccenture.github.io/mfa-nx-fed/item-details',
    ],
    ['footer', 'https://saswatiaccenture.github.io/mfa-nx-fed/footer'],
  ],
  /*
   * Remote overrides for production.
   * Each entry is a pair of a unique name and the URL where it is deployed.
   *
   * e.g.
   * remotes: [
   *   ['app1', 'https://app1.example.com'],
   *   ['app2', 'https://app2.example.com'],
   * ]
   */
});
