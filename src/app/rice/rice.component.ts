import { Component } from '@angular/core';
import { RiceService } from '../services/rice.service';

@Component({
  selector: 'pruthvi-firm-rice-container',
  styleUrls: ['./rice.component.scss'],
  templateUrl: 'rice.component.html'
})
export class RiceComponent  {
  public items: any = [];

  constructor(public riceService: RiceService){
      this.fetchVegetables();
  }

  fetchVegetables(){
      this.items = this.riceService.getRiceItems();
  }
}