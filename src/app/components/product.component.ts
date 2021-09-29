import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core'
import { Product } from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor(){
        console.log('0 constructor');
    }

    ngOnChanges(changes: SimpleChange) {
        console.log('1 ngOnChanges', changes);
    }

    ngOnInit(){
        console.log('2 ngOnInit');
    }

    ngDoCheck() {
        console.log('3 ngDoCheck');
    }

    ngOnDestroy() {
        console.log('4 ngOnDestroy');
    }

    addToCart() {
        this.productClicked.emit(this.product.id);
    }
}