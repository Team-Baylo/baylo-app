import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewItemPageRoutingModule } from './view-item-routing.module';

import { ViewItemPage } from './view-item.page';
import { HeaderContainerModule } from 'src/app/header-container/header-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewItemPageRoutingModule,
    HeaderContainerModule
  ],
  declarations: [ViewItemPage]
})
export class ViewItemPageModule {}
