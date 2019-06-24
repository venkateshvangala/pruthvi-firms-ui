import { CartService } from '../../services/cart.service';
import { Component, Input } from "@angular/core";

@Component({
    selector: 'pruthvi-firm-cart-tile',
    templateUrl: 'cart-tile.component.html',
    styleUrls: ['cart-tile.component.scss']
})
export class CartTileComponent{

    constructor(private cartService: CartService){

    }

    @Input() item: any;

    addItemToCart(item){
        this.cartService.addItemToCart(item);
    }
    
}