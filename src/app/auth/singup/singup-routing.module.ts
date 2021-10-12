import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingupPage } from './singup.page';

const routes: Routes = [
  {
    path: '',
    component: SingupPage
  },
  // {
  //   path: 'tabs',
  //   loadChildren: () => import('/tabs/tabs.module').then( m => m.TabsPageModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingupPageRoutingModule {}
