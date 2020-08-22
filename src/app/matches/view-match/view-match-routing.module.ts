import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMatchPage } from './view-match.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMatchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMatchPageRoutingModule {}
