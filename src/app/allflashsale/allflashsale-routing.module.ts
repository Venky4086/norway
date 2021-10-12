import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllflashsalePage } from './allflashsale.page';

const routes: Routes = [
  {
    path: '',
    component: AllflashsalePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllflashsalePageRoutingModule {}
