import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-selected',
  templateUrl: './modal-selected.component.html',
  styleUrls: ['./modal-selected.component.css']
})
export class ModalSelectedComponent {
  @Input() selectedIsOpen: boolean
  
  @Output() buttonClick = new EventEmitter()

  public closeModal(): void {
    	this.buttonClick.emit();
	}
}
