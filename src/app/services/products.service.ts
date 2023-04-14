import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { IBeerList } from "../interfaces/interfaces";

@Injectable({
    providedIn:'root'
})

export class ProductsService {
    constructor(private http: HttpClient) {
        
    }
    getAll():Observable<IBeerList> {
        return this.http.get<IBeerList>('https://api.punkapi.com/v2/beers?page=1&per_page=5')
    }
}