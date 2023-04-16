import { Component, Input } from '@angular/core'
import { IBeerItem } from 'src/app/interfaces/interfaces'
import { Preferences } from '@capacitor/preferences';


@Component({
    selector: 'card-item',
    templateUrl: './card-item.component.html',
    styleUrls: ['./card-item.component.css']
})

export class CardItemComponent {
    @Input() item: IBeerItem
    
}