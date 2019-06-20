import { Component } from "@angular/core";
import { MilletsService } from '../services/millets.service';

@Component({
    selector: 'pruthvi-firm-millets',
    templateUrl: 'millets.component.html',
    styleUrls: ['millets.component.scss']
})
export class MilletsComponent {
    public items: any = [];

    constructor(public milletsService: MilletsService){
        this.fetchVegetables();
    }
  
    fetchVegetables(){
        this.items = this.milletsService.getMillets();
    }
}