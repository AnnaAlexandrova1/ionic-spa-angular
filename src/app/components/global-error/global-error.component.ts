import { Component, OnInit, Input } from '@angular/core';
import { IError } from 'src/app/interfaces/interfaces';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.css']
})
export class GlobalErrorComponent implements OnInit {
  @Input() error: IError
  constructor(public errorService: ErrorService){}

  ngOnInit(): void {
      
  }

}
