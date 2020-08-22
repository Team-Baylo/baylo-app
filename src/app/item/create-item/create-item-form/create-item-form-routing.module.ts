import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateItemFormPage } from './create-item-form.page';

const routes: Routes = [
  {
    path: '',
    component: CreateItemFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateItemFormPageRoutingModule {}
