import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MyPagination } from 'src/app/interfaces/interfaces';

export const pagesList: Array<number> = [1, 2, 3]

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
  
export class PaginationComponent {

  // public currentPage: number = 1;

  // @Input() set setPagination(pagination: MyPagination) {
  //   if (pagination) {
  //     const pagesAmount = Math.ceil(
  //       pagination.itemsCount / pagination.pageSize
  //     );      this.pagesArray = new Array(pagesAmount).fill(1);
  //   }
  // }

  @Input() currentPage: number

  @Output() goToPage = new EventEmitter();

   public setPage(pageNumber: number): void {

 // Запретить изменения, если была выбрана та же страница
 if (pageNumber === this.currentPage)
   return;
  this.currentPage = pageNumber;
  this.goToPage.emit(pageNumber);
}
}
