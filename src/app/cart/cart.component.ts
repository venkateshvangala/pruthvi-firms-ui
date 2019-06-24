import { CartService } from './../services/cart.service';
import { Component } from "@angular/core";

@Component({
    selector: "pruthvi-firm-cart",
    templateUrl: "cart.component.html",
    styleUrls: ["cart.component.scss"]
})
export class CartComponent {

    public cartItems: any = [];
    constructor(private cartService: CartService){
        this.cartItems = this.cartService.cartItems;
    }
}