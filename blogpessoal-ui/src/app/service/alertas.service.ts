import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor( private bsModalsERVICE: BsModalService) { }

  private showAlert(text: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalsERVICE.show(AlertasComponent)
    bsModalRef.content.type = type
    bsModalRef.content.text = text
  }

  showAlertDanger(text: string){
    this.showAlert(text, 'danger')
  }

  showAlertSuccess(text: string){
    this.showAlert(text, 'success')
  }

  showAlertWarning(text: string){
    this.showAlert(text, 'warning')
  }
}