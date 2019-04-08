import { Injectable } from "@angular/core";

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Injectable({
  providedIn: 'root'
})
export class InspireModalService{
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService){

  }

  showModal(templateRef: any, initialState:object, customClass){
    // backdrop: 'static' will stop the background click
    this.modalRef = this.modalService.show(templateRef, {initialState,  backdrop: 'static', class: customClass});
    this.modalRef.content.closeBtnName = 'Close'
  }

  closeModal(){
    this.modalRef.hide();
    this.modalRef = null;
  }
}
