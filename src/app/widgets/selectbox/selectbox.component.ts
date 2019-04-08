import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'pruthvi-firm-select',
  templateUrl: 'selectbox.component.html',
  styleUrls: ['selectbox.component.scss']
})
export class SelectboxComponent implements OnInit{
  public data: any = [];
  @Input()
  set items(options){
    this.prepareOptions(options);
  }
  @Input() selectedItem: any;
  @Input() placeholder: any = null;
  @Input() isMultiSelect: boolean = false;
  @Input() clearable: boolean = true;
  @Output() handleOptionsChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() handleSearchChange: EventEmitter<any> = new EventEmitter<any>();


  ngOnInit(){
    if(_.isEmpty(_.findWhere(this.data, {id: this.selectedItem})))
    this.data.push({ id: this.selectedItem, name: this.selectedItem});
  }

  prepareOptions(options){
    this.data = _.map(options, (item) => {
      if(typeof item !== "object")
      return { id: item, name: item };
      return item;
    });
  }

  handleSearch(searchKey){
    if(this.handleSearchChange.observers.length && searchKey)
    this.handleSearchChange.emit();
  }

  handleChangeEvent(val){
    this.handleOptionsChange.emit(val);
  }
}
