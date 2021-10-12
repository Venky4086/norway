import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyodersPage } from './myoders.page';

const routes: Routes = [
  {
    path: '',
    component: MyodersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyodersPageRoutingModule {}
