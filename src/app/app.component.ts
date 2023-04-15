import { Component, OnInit } from '@angular/core';
import { GetApiService } from './services/get-api.service';
import { IBeerList, IBeerItem, ICheckedItem } from './interfaces/interfaces';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs';

const ex: IBeerItem = {
  id: 1, name: 'Buzz', tagline: 'A Real Bitter Experience.', first_brewed: '09/2007',
  description: 'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
  image_url: "https://images.punkapi.com/v2/keg.png",
  abv: 1,
    ibu: 1,
    target_fg: 1,
    target_og: 1,
    ebc: 15,
    srm: 7.5,
    ph: 4.4,
    attenuation_level: 88.9,
    volume: 1,
    boil_volume: 1,
    method: 1,
    ingredients: 1,
    food_pairing: ["Spicy chicken tikka masala"],
    brewers_tips: "Spicy chicken tikka masala",
    contributed_by: "Spicy chicken tikka masala",
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'spa-angular';
  items$: Observable<IBeerList>
  loading = false
  private _currentPage: number = 1;

  checkedItem: IBeerItem  = ex 
  checkedItemIsOpen: boolean = false
 

  constructor(private itemsService: GetApiService) { }

  public setCheckedItem(item: IBeerItem) {
    this.checkedItem = item;
    this.checkedItemIsOpen = true;
    console.log(this.checkedItem)
  }

  public goToPage(page: number): void {
    this._currentPage = page;
    this._loadItems(this._currentPage)
  }
  
  private _loadItems(page: number = 1) {
    this.getItems()
  }

  getItems(): void{
    this.loading = true
    this.items$ = this.itemsService.getAll(this._currentPage).pipe(
      tap(() => this.loading = false)
    )
  }

  ngOnInit(): void {
    this.getItems()
  }
}

