import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeContainerPage } from './home-container.page';

const routes: Routes = [
  {
    path: '',
    component: HomeContainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeContainerPageRoutingModule {}
