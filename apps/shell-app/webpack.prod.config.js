const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({
  ...config,
  remotes: [
    ['header', 'https://darling-sawine-6d5da7.netlify.app'],
    ['side-nav', 'https://65b2d05565fa433689f17c60--gorgeous-platypus-7e0faa.netlify.app'],
    [
      'item-details',
      'https://65b2cd73575085356ba5cdfb--poetic-kleicha-bbf749.netlify.app',
    ],
    ['footer', 'https://mellow-dragon-4ec7c7.netlify.app'],
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
