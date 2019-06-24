import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class RiceService {
    getRiceItems(){
        return [
            {
                "id": 17,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
                "title": "Potato",
                "price": "100"
            },
            {
                "id": 18,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
                "title": "Onion",
                "price": "200"
            },
            {
                "id": 19,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
                "title": "Tomato",
                "price": "100"
            },
            {
                "id": 20,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/20000979_10-fresho-palak.jpg",
                "title": "Palak",
                "price": "100"
            },
            {
                "id": 21,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
                "title": "Benda",
                "price": "100"
            },
            {
                "id": 22,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
                "title": "cauliflower",
                "price": "100"
            },
            {
                "id": 23,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
                "title": "Potato",
                "price": "100"
            },
            {
                "id": 24,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
                "title": "Onion",
                "price": "200"
            }
        ]
    }
}