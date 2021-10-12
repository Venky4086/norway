import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllflashsalePageRoutingModule } from './allflashsale-routing.module';

import { AllflashsalePage } from './allflashsale.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllflashsalePageRoutingModule
  ],
  declarations: [AllflashsalePage]
})
export class AllflashsalePageModule {}
