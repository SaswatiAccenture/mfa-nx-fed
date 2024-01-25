import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'footer',
    loadChildren: () =>
      import('footer/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'header',
    loadChildren: () =>
      import('header/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'item-details',
    loadChildren: () =>
      import('item-details/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'side-nav',
    loadChildren: () =>
      import('side-nav/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
