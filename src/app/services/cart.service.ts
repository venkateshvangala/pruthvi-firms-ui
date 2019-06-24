import { Injectable } from "@angular/core";
import * as _ from "underscore";

@Injectable({
    providedIn: "root"
})
export class CartService {

    public cartItems: any = [];

    addItemToCart(item){
        this.cartItems.push(item);
    }

    removeItemFromCart(item){
        this.cartItems = _.without(this.cartItems, {id: item.id});
    }
}