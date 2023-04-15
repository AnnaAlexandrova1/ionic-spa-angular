import { Component, Input } from '@angular/core';
import { IBeerItem, ICheckedItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.css']
})
export class ModalItemComponent {
  @Input() checkedItemIsOpen: boolean
  @Input() checkedItem: IBeerItem 
}
