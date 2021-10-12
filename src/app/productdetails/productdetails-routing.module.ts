import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductdetailsPage } from './productdetails.page';

const routes: Routes = [
  {
    path: '',
    component: ProductdetailsPage
  },
  // {
  //   path: 'addcart',
  //   loadChildren: () => import('../addcart/addcart.module').then( m => m.AddcartPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductdetailsPageRoutingModule {}
