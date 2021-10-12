import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage, children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('../categories/categories.module').then( m => m.CategoriesPageModule)
      },
      {
        path: 'addcart',
        loadChildren: () => import('../addcart/addcart.module').then( m => m.AddcartPageModule)
      },
      // {
      //   path: 'profile',
      //   loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      // },
      {
        path: 'notifications',
        loadChildren: () => import('../notifications/notifications.module').then( m => m.NotificationsPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      // {
      //   path: 'offers',
      //   loadChildren: () => import('../offers/offers.module').then( m => m.OffersPageModule)
      // },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
