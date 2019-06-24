import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class PulseService {
    getPulseItems(){
        return [
            {
                "id": 9,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
                "title": "Potato",
                "price": "100"
            },
            {
                "id": 10,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
                "title": "Onion",
                "price": "200"
            },
            {
                "id": 11,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
                "title": "Tomato",
                "price": "100"
            },
            {
                "id": 12,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/20000979_10-fresho-palak.jpg",
                "title": "Palak",
                "price": "100"
            },
            {
                "id": 13,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
                "title": "Benda",
                "price": "100"
            },
            {
                "id": 14,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
                "title": "cauliflower",
                "price": "100"
            },
            {
                "id": 15,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
                "title": "Potato",
                "price": "100"
            },
            {
                "id": 16,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
                "title": "Onion",
                "price": "200"
            }
        ]
    }
}