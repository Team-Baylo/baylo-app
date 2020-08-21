import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderContainerComponent } from './header-container.component';



@NgModule({
  exports: [HeaderContainerComponent],
  declarations: [HeaderContainerComponent],
  imports: [
    CommonModule
  ]
})
export class HeaderContainerModule { }
