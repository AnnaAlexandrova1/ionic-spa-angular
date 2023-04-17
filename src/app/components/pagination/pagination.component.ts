import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
  
export class PaginationComponent {
  @Input() currentPage: number
  @Output() goToPage = new EventEmitter()

  pagesList: Array<number> = [1, 2, 3]
  
  public drowStylePages(e: number) {
    if (e === this.currentPage) {
      return 'pagination-item checked'
    } else {
      return 'pagination-item'
    }
  }

public setPage(pageNumber: number): void {
  if (pageNumber === this.currentPage) { return }
  this.currentPage = pageNumber;
  this.goToPage.emit(pageNumber)
 }
}
