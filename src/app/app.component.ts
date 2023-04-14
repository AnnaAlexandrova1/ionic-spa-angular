import { Component, OnInit } from '@angular/core';
import { GetApiService } from './services/get-api.service';
import { IBeerList } from './interfaces/interfaces';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { switchMap, map } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'spa-angular';
  items: IBeerList
  loading = false

  private _currentPage: number = 1;

  constructor(private itemsService: GetApiService) { }

  public goToPage(page: number): void {
    this._currentPage = page;
   console.log(this.items)
    this._loadItems(this._currentPage)
  }
  
  private _loadItems(page: number = 1) {
    // this.itemsService.getAll(this._currentPage).subscribe((response) => { console.log(response) }), (error: any) => console.error(error)
    //  this.loading = true
     this.itemsService.getAll(this._currentPage).subscribe(items => this.items=items)
  }

  getItems(): void{
    // this.loading = true
    this.itemsService.getAll(this._currentPage).subscribe(items => this.items=items)
  }

  ngOnInit(): void {
    this.getItems()
  }
}

