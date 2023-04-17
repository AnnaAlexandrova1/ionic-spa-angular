import { Injectable } from "@angular/core"
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from "rxjs";
import { IBeerList } from "../interfaces/interfaces";
import { ErrorService } from "./error.service";

@Injectable({
    providedIn:'root'
})

export class GetApiService {
    constructor(
        private http: HttpClient,
        private errorService: ErrorService 
    ) {
        
    }
    getAll(page:number):Observable<IBeerList> {
        return this.http.get<IBeerList>('https://api.punkapi.com/v2/beers?', {
            params: new HttpParams(
                {
                    fromObject: {
                        per_page: 5, 
                        page: page
                    }
                }
            )
        }).pipe(
            catchError(this.errorHandler.bind(this))
        )
    }

    private errorHandler(error: HttpErrorResponse) {
        this.errorService.handle(error.message)
        this.errorService.handleStatus(error.status)
        console.log(error.status)
        return throwError(() => error)
    }
}
