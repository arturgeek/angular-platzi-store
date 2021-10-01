import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    SimpleChanges, 
    OnChanges,
    OnInit,
    OnDestroy
} from '@angular/core'
import { Product } from '../product.model'

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy{
    @Input() product!: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    constructor(){
        console.log('0 constructor');
    }

    ngOnChanges(changes: SimpleChanges){
        console.log('1 ngOnChanges', changes);
    }

    ngOnInit(){
        console.log('2 ngOnInit');
    }

    ngOnDestroy() {
        console.log('4 ngOnDestroy');
    }

    addToCart() {
        this.productClicked.emit(this.product.id);
    }
}