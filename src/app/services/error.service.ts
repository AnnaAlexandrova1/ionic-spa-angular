import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error$ = new Subject<string>();
  status$ = new Subject<number>();

  handle(message: string) {
    this.error$.next(message);
  }

  clear() {
    this.error$.next('');
  }

  handleStatus(status: number) {
    this.status$.next(status);
  }

  statusClear() {
    this.status$.next(-1);
  }
}
