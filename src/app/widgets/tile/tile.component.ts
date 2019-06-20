import { Component, Input } from "@angular/core";

@Component({
    selector: 'pruthvi-firm-tile',
    templateUrl: 'tile.component.html',
    styleUrls: ['tile.component.scss']
})
export class TileComponent{

    @Input() item: any;
    
}