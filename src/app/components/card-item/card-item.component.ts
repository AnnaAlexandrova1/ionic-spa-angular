import { Component, Input } from '@angular/core'
import { IBeerItem } from 'src/app/interfaces/interfaces'


@Component({
    selector: 'card-item', 
    templateUrl: './card-item.component.html'   
})

export class CardItemComponent {
    @Input() product: IBeerItem
    
    details:boolean = false
}