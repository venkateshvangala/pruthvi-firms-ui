import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
@Component({
    selector: "pruthvi-forms-checkout",
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.scss"]
})
export class CheckoutComponent{

    public cartItems: any = [];

    constructor(private cartService: CartService){
        this.cartItems = this.cartService.cartItems;
    }
}