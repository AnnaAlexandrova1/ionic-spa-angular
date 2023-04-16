import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { IBeerItem } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-modal-selected',
  templateUrl: './modal-selected.component.html',
  styleUrls: ['./modal-selected.component.css']
})
export class ModalSelectedComponent implements OnInit, OnChanges{
  @Input() selectedIsOpen: boolean
  @Output() buttonClick = new EventEmitter()

  public keysArr: Array<string> = []
  public itemsArr: Array<any> = []


  public closeModal(): void {
    this.buttonClick.emit();
    this.itemsArr = []
  }

  getSelectedKeys = async () => {
    const keys: any = await Preferences.keys();
    this.keysArr = keys.keys
  };

  getSelectedBeer = async () => {
     for (let i in this.keysArr) {
       let item: string | any = (await Preferences.get({ key: this.keysArr[i] })).value
       const parsItem: IBeerItem = JSON.parse(item)
       this.itemsArr.push(parsItem)       
     }
  };
  
  removeSelectedBeer = async (key:string) => {
    await Preferences.remove({ key: key });
    this.itemsArr = this.itemsArr.filter((j:any) => j.id !== +key)
  }
  
  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void{
  if(changes.selectedIsOpen.currentValue){
    this.getSelectedKeys().then(() => this.getSelectedBeer())
    }   
  }

}
