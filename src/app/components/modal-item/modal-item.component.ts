import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBeerItem, ICheckedItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.css']
})
export class ModalItemComponent {
  @Input() checkedItemIsOpen: boolean
  @Input() checkedItem: IBeerItem 

  @Output() buttonClick = new EventEmitter()

  public unCheckedItem(): void {
    	this.buttonClick.emit();
		}
}
