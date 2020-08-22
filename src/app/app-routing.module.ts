import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home-container',
    loadChildren: () => import('./home/home-container/home-container.module').then( m => m.HomeContainerPageModule)
  },
  {
    path: 'view-item',
    loadChildren: () => import('./item/view-item/view-item.module').then( m => m.ViewItemPageModule)
  },
  {
    path: 'view-all-requests',
    loadChildren: () => import('./requests/view-all-requests/view-all-requests.module').then( m => m.ViewAllRequestsPageModule)
  },
  {
    path: 'create-request',
    loadChildren: () => import('./requests/create-request/create-request.module').then( m => m.CreateRequestPageModule)
  },
  {
    path: 'view-all-matches',
    loadChildren: () => import('./matches/view-all-matches/view-all-matches.module').then( m => m.ViewAllMatchesPageModule)
  },
  {
    path: 'view-match',
    loadChildren: () => import('./matches/view-match/view-match.module').then( m => m.ViewMatchPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
