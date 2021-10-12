import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyodersPageRoutingModule } from './myoders-routing.module';

import { MyodersPage } from './myoders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyodersPageRoutingModule
  ],
  declarations: [MyodersPage]
})
export class MyodersPageModule {}
