import { Component, OnInit } from '@angular/core';
import { GetApiService } from './services/get-api.service';
import { IBeerList } from './interfaces/interfaces';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spa-angular';
  items$: Observable<IBeerList>
  loading = false


  constructor(private itemsService: GetApiService) {
    
  }

  ngOnInit(): void {
    this.loading = true
    this.items$ = this.itemsService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }
}
