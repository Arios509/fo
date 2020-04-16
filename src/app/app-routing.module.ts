import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./module/seller/seller.module').then(m => m.SellerViewModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./module/main/main.module').then(m => m.MainUserModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
