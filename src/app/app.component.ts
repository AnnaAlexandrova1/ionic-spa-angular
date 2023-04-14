import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { IBeerList } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spa-angular';
  products: IBeerList = []

  constructor(private productsService: ProductsService) {
    
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
        console.log(products)
    }
      )
  }
}
