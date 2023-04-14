import { Component, OnInit } from '@angular/core';
import { GetApiService } from './services/get-api.service';
import { IBeerList } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spa-angular';
  items: IBeerList = []

  constructor(private itemsService: GetApiService) {
    
  }

  ngOnInit(): void {
    this.itemsService.getAll().subscribe(items => {
      this.items = items
      console.log(this.items)
    }
      )
  }
}
