import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard'

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "/home",
        pathMatch: "full",
      },
      {
        path: "home",
        loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
      },
      {
        path: "products",
        loadChildren: () => import('./products/products.module').then( m => m.ProductsModule )
      },
      {
        path: "contact",
        loadChildren: () => import('./contact/contact.module').then( m => m.ContactModule )
      },
      {
        path: "demo",
        loadChildren: () => import('./demo/demo.module').then( m => m.DemoModule )
      }
    ]
  },
  {
    path: "admin",
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule )
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
