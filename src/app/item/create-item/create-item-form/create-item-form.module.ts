import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateItemFormPageRoutingModule } from './create-item-form-routing.module';

import { CreateItemFormPage } from './create-item-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateItemFormPageRoutingModule
  ],
  declarations: [CreateItemFormPage],
  exports: [CreateItemFormPage]
})
export class CreateItemFormPageModule {}
