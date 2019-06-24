import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MilletsService {
    getMillets(){
        return [
            {
                "id": 1,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
                "title": "Potato",
                "price": "100"
            },
            {
                "id": 2,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
                "title": "Onion",
                "price": "200"
            },
            {
                "id": 3,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000200_17-fresho-tomato-hybrid.jpg",
                "title": "Tomato",
                "price": "100"
            },
            {
                "id": 4,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/20000979_10-fresho-palak.jpg",
                "title": "Palak",
                "price": "100"
            },
            {
                "id": 5,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000144_13-fresho-ladies-finger.jpg",
                "title": "Benda",
                "price": "100"
            },
            {
                "id": 6,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000074_19-fresho-cauliflower.jpg",
                "title": "cauliflower",
                "price": "100"
            },
            {
                "id": 7,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg",
                "title": "Potato",
                "price": "100"
            },
            {
                "id": 8,
                "itemImg": "https://www.bigbasket.com/media/uploads/p/s/10000148_24-fresho-onion.jpg",
                "title": "Onion",
                "price": "200"
            }
        ]
    }
}