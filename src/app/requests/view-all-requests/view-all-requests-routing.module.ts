import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllRequestsPage } from './view-all-requests.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllRequestsPageRoutingModule {}
