import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateItemPage } from './create-item.page';

const routes: Routes = [
  {
    path: '',
    component: CreateItemPage
  },
  {
    path: 'create-item-form',
    loadChildren: () => import('./create-item-form/create-item-form.module').then( m => m.CreateItemFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateItemPageRoutingModule {}
