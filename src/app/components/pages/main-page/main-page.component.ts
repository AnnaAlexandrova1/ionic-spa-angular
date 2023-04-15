import { Component, OnInit } from '@angular/core';
import { Observable, tap, BehaviorSubject } from 'rxjs';
import { IBeerList } from 'src/app/interfaces/interfaces';
import { GetApiService } from 'src/app/services/get-api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  items$: Observable< IBeerList>
  loading = false
    private _currentPage: number = 1;

  constructor(private itemsService: GetApiService) { }

  public goToPage(page: number): void {
    this._currentPage = page;
    this._loadItems(this._currentPage)
  }
  
  private _loadItems(page: number = 1) {
    // this.itemsService.getAll(this._currentPage).subscribe((response) => { console.log(response) }), (error: any) => console.error(error)
    //  this.loading = true
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
