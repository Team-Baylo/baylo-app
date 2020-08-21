import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderContainerModule } from '../header-container/header-container.module';
import { HomeContainerPageModule } from '../home-container/home-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderContainerModule,
    HomeContainerPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
