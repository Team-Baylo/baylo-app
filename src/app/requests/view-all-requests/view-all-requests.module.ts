import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllRequestsPageRoutingModule } from './view-all-requests-routing.module';

import { ViewAllRequestsPage } from './view-all-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllRequestsPageRoutingModule
  ],
  declarations: [ViewAllRequestsPage]
})
export class ViewAllRequestsPageModule {}
