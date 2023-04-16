import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { IBeerItem, ICheckedItem } from 'src/app/interfaces/interfaces';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.css']
})
export class ModalItemComponent implements OnInit, OnChanges{
  @Input() checkedItemIsOpen: boolean
  @Input() checkedItem: IBeerItem 

  @Output() buttonClick = new EventEmitter()

  selected: boolean = false
  disabled: boolean = false

  public unCheckedItem(): void {
    	this.buttonClick.emit();
  }

  getSelectedBeer = async () => {
    const item: string | any = await Preferences.get({ key: String(this.checkedItem.id) })
    if (item.value) {
      this.selected=true
    } else {
      this.selected=false
    }
  }
    
  
  setBeerItem = async (key: number, value: IBeerItem) => { 
    await Preferences.set({
      key: String(key),
      value: JSON.stringify(value),
    });
    this.disabled = true;
  }

  ngOnInit(): void {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getSelectedBeer()
  }
}
