import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { GetApiService } from './services/get-api.service';
import { IBeerList, IBeerItem, ICheckedItem } from './interfaces/interfaces';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { ex } from './interfaces/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges{
  title = 'spa-angular';
  items$: Observable<IBeerList>
  loading = false
  public _currentPage: number = 1;

  checkedItem: IBeerItem  = ex
  checkedItemIsOpen: boolean = false

  selectedIsOpen = false

  constructor(private itemsService: GetApiService) { }

  public setCheckedItem(item: IBeerItem):void {
    this.checkedItem = item;
    this.checkedItemIsOpen = true;
    console.log(this.checkedItem)
  }

  public unsetCheckedItem(): void {
    this.checkedItemIsOpen = false;
  }

  public goToPage(page: number): void {
    this._currentPage = page;
    this._loadItems(this._currentPage)
  }

  public drowStylePages(e: number) {
    if (e === this._currentPage) {
      return 'pagination-item checked'
    } else {
      return 'pagination-item'
    }
  }

  public selectedOpen() {
    this.selectedIsOpen = true;
  }

  public selectedClose() {
    this.selectedIsOpen = false
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

   ngOnChanges(changes: SimpleChanges): void{
    console.log(changes)
  }

  ngOnInit(): void {
    this.getItems()
  }
}

