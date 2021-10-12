import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcartPage } from './addcart.page';

const routes: Routes = [
  {
    path: '',
    component: AddcartPage
  },
  // {
  //   path: 'home',
  //   loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: 'productdetails',
  //   loadChildren: () => import('../productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcartPageRoutingModule {}
