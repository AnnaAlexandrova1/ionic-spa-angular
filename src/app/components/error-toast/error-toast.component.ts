import { Component, Input } from '@angular/core';
import { IError } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'error-toast',
  templateUrl: './error-toast.component.html',
  styleUrls: ['./error-toast.component.css']
})
export class ErrorToastComponent {
 @Input() error:IError
 
}
