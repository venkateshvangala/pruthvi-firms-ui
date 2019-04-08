import { Component, OnInit } from "@angular/core";
import { InspireModalService } from '../services';
import { LoaderService } from './../services/loader.service';

@Component({
    selector: 'pruthvi-firm-my-play-book',
    templateUrl: 'my-play-book.component.html',
    styleUrls: ['my-play-book.component.scss']
})
export class MyPlayBookComponent implements OnInit {

    public userProjectsList = [];
    public backlogProjects = [];
    public onGoingProjects = [];
    public displayCalenderView: any = null;
    public isBacklogPorojects: boolean = true;

    constructor(
        private loaderService: LoaderService,
        private inspireModalService: InspireModalService) {
    }

    ngOnInit() {
       
    }


}