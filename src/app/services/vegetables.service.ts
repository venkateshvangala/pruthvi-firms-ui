import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class VegetableService {
    getVegetables(){
        return [
            {
                "id": 25,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
                "title": "Potato",
                "price": "100"
            },
            {
                "id": 26,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
                "title": "Onion",
                "price": "200"
            },
            {
                "id": 27,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
                "title": "Tomato",
                "price": "100"
            },
            {
                "id": 28,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/20000979_10-fresho-palak.jpg",
                "title": "Palak",
                "price": "100"
            },
            {
                "id": 29,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
                "title": "Benda",
                "price": "100"
            },
            {
                "id": 30,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
                "title": "cauliflower",
                "price": "100"
            },
            {
                "id": 31,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
                "title": "Potato",
                "price": "100"
            },
            {
                "id": 32,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
                "title": "Onion",
                "price": "200"
            }
        ]
    }
}