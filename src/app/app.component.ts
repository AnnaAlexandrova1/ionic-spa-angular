import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { GetApiService } from './services/get-api.service';
import { IBeerList, IBeerItem, IError } from './interfaces/interfaces';
import { tap } from 'rxjs';
import { example } from './interfaces/data';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnChanges{
  title = 'spa-angular';
  // items$: Observable<IBeerList>
  items:IBeerList
  loading = false
  error: IError = { isError: false,
  message: '',
  status: 0 }
  currentPage: number = 1;

  checkedItem: IBeerItem  = example
  checkedItemIsOpen: boolean = false

  selectedIsOpen = false

  constructor(private itemsService: GetApiService) { }

  public setCheckedItem(item: IBeerItem):void {
    this.checkedItem = item;
    this.checkedItemIsOpen = true;
  }

  public unsetCheckedItem(): void {
    this.checkedItemIsOpen = false;
  }

  public goToPage(page: number): void {
    this.currentPage = page;
    this._loadItems(this.currentPage)
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
    this.itemsService.getAll(this.currentPage).pipe(
      tap(() => this.loading = false)
    ).subscribe(
      (res: IBeerList | any) => {
        this.items = res
      },
      (err) => {
        this.error.isError = true,
        this.error.message = err.message,
        this.error.status = err.status
        this.loading = false
      }
    )
  }

   ngOnChanges(changes: SimpleChanges): void{
    // console.log(changes)
  }

  ngOnInit(): void {
    this.getItems()
  }
}

