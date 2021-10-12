import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { FlashsaleComponent } from './flashsale/flashsale.component';
import { HomeSegmentComponent } from './home-segment/home-segment.component';
import { VedioComponent } from '../vedio/vedio.component';
import {CategoriesComponent} from './categories/categories.component';
import { BannersComponent } from './banners/banners.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    // FlashsaleComponent 
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [HomePage,FlashsaleComponent,HomeSegmentComponent,VedioComponent,CategoriesComponent,BannersComponent ]
})
export class HomePageModule {}
