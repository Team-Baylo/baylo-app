import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllMatchesPageRoutingModule } from './view-all-matches-routing.module';

import { ViewAllMatchesPage } from './view-all-matches.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllMatchesPageRoutingModule
  ],
  declarations: [ViewAllMatchesPage]
})
export class ViewAllMatchesPageModule {}
