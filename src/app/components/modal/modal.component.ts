import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ModalService } from "app/services/modal.service";

/**
 * Angular component to show and hide templates or component in a Modal
 * 
 * @export
 * @class ModalComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------

  private show: boolean = false;

  // -------------------------------------------------------------------------
  // Inputs / Outputs
  // -------------------------------------------------------------------------

  @Input() modalId: string;
  @HostBinding('style.display') display = 'none';

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.modalActions.subscribe(event => {
      if (event.id === this.modalId) {
        if (event.action === 'open') {
          this.display = 'block';
        } else if (event.action === 'close') {
          this.display = 'none';
        }
      }

    })
  }

}
