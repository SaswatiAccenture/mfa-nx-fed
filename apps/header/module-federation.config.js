module.exports = {
  name: 'header',
  exposes: {
    './Module': 'apps/header/src/app/remote-entry/entry.module.ts',
    './component': 'apps/header/src/app/remote-entry/entry.component.ts'
  },
};
