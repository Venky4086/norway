import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'allflashsale',
    loadChildren: () => import('../allflashsale/allflashsale.module').then( m => m.AllflashsalePageModule)
  },
  // {
  //   path: 'addcart',
  //   loadChildren: () => import('../addcart/addcart.module').then( m => m.AddcartPageModule)
  // },
  // {
  //   path: 'productdetails',
  //   loadChildren: () => import('../productdetails/productdetails.module').then( m => m.ProductdetailsPageModule)
  // },
  // {
  //   path: 'notifications',
  //   loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
