import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'chat',
    pathMatch: 'full',
    loadChildren: () =>
      import('@cometchat-bug-reproduction/chat').then((m) => m.ChatModule),
  },
];
