import { Routes } from '@angular/router';

export const allRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('../../home/home.module').then( m => m.HomeModule)
  },
  {
    path: 'intranet',
    loadChildren: () => import('../../intranet/intranet.module').then( m => m.IntranetModule)
  },
];
