import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateItemPageRoutingModule } from './create-item-routing.module';

import { CreateItemPage } from './create-item.page';
import { CreateItemFormPageModule } from './create-item-form/create-item-form.module';
import { HeaderContainerModule } from 'src/app/header-container/header-container.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateItemPageRoutingModule,
    CreateItemFormPageModule,
    HeaderContainerModule
  ],
  declarations: [CreateItemPage]
})
export class CreateItemPageModule {}
