import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../core/services/products/products.service';
import { Product } from './../../../core/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) { }

  products:Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  ngOnInit(): void {
    this.fetchProducts()
  }

  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe( products => {
      this.products = products;
    } )
  }

  updateProduct(id:string){
    const product: Partial<Product> = {
      price: 2500,
      description: 'new edition'
    };
    this.productsService.updateProduct(id, product)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(id:string){
    this.productsService.deleteProduct(id)
    .subscribe(product => {
      console.log(product);
    });
  }

}
