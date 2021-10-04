import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


import { ProductsRoutingModule } from './products-routing.module'
import { SharedModule } from './../shared/shared.module'

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        ProductsRoutingModule,
        CommonModule,
        SharedModule
    ]
})

export class ProductsModule {

} 