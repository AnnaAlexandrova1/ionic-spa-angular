import { Injectable } from "@angular/core"
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from "rxjs";
import { IBeerList } from "../interfaces/interfaces";

@Injectable({
    providedIn:'root'
})

export class GetApiService {
    constructor(private http: HttpClient) {
        
    }
    getAll():Observable<IBeerList> {
        return this.http.get<IBeerList>('https://api.punkapi.com/v2/beers?', {
            params: new HttpParams(
                {
                    fromObject: {
                        per_page: 5, 
                        page: 1 
                    }
                }
            )
        }).pipe(
            catchError(this.errorHandler)
        )
    }

    private errorHandler(error: HttpErrorResponse) {
        return throwError(() => error.message)
    }
}
