import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { LoaderService, LoaderState } from '../../services/loader.service';

@Component({
  selector: 'pruthvi-firm-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy{

  public loader: boolean = false;
  private subscription: Subscription;
  constructor(private loaderService: LoaderService) {}

  ngOnInit(){
    this.subscription = this.loaderService.loaderState.subscribe(
      (state: LoaderState) => {
        this.loader = state.show;
      }
    )
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}