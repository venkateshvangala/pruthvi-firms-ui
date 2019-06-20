import { Component } from "@angular/core";
import { VegetableService } from '../services/vegetables.service';

@Component({
    selector: 'pruthvi-firm-vegetables',
    templateUrl: 'vegetables.component.html',
    styleUrls: ['vegetables.component.scss']
})
export class VegetablesComponent {

    public items: any = [];

    constructor(public vegetableService: VegetableService){
        this.fetchVegetables();
    }

    fetchVegetables(){
        this.items = this.vegetableService.getVegetables();
    }

}