import { PulseService } from './../services/pulses.service';
import { Component } from "@angular/core";

@Component({
    selector: 'pruthvi-firm-pulses',
    templateUrl: 'pulses.component.html',
    styleUrls: ['pulses.component.scss']
})
export class PulsesComponent {

    public items: any = [];

    constructor(public pulseService: PulseService){
        this.fetchVegetables();
    }

    fetchVegetables(){
        this.items = this.pulseService.getPulseItems();
    }

}