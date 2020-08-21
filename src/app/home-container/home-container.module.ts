import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeContainerPageRoutingModule } from './home-container-routing.module';

import { HomeContainerPage } from './home-container.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeContainerPageRoutingModule
  ],
  declarations: [HomeContainerPage],
  exports: [HomeContainerPage]
})
export class HomeContainerPageModule {}
