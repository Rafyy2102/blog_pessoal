import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css']
})
export class AlertasComponent implements OnInit {

  @Input() text: string
  @Input() type: 'success'

  constructor(public modal: BsModalRef) { }

  ngOnInit(): void {
  }

  onClose(){
    this.modal.hide()
  }
}