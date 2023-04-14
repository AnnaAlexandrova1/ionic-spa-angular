import { Component, OnInit } from '@angular/core';
import { products as data} from './data/products';
import { IProduct } from './interfaces/interfaces';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'spa-angular';
  products: IProduct[] = []

  constructor(private productsService: ProductsService) {
    
  }

  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
        console.log(products)
    }
      )
  }
}
