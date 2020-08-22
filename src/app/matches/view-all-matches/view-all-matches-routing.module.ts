import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllMatchesPage } from './view-all-matches.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllMatchesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllMatchesPageRoutingModule {}
