import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMatchPageRoutingModule } from './view-match-routing.module';

import { ViewMatchPage } from './view-match.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMatchPageRoutingModule
  ],
  declarations: [ViewMatchPage]
})
export class ViewMatchPageModule {}
