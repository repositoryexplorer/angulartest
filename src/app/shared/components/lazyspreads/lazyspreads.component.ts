import {Component, ElementRef} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHandler, HttpParams} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CookieService} from 'ngx-cookie-service';
import {PaginationControlsDirective} from "ngx-pagination";

export class Page {
  id: number;
  pageTemplate: string;
  orientation: number;
}
export class Spread {
  id: number;
  docId: string;
  spreadId: string;
  pages: Array<Page>;
  isSelected = false;
}
@Component({
  selector: 'app-lazyspreads',
  templateUrl: './lazyspreads.component.html',
  styleUrls: ['./lazyspreads.component.scss'],
})
export class LazyspreadsComponent {
  data: Spread[];
  itemsPerPage: number = 5;
  p2: any;
  constructor(private httpClient: HttpClient, private cookieService: CookieService) {
    this.httpClient
      //?_start=' + (page * this.pageSize) + '&_end=' + ((page * this.pageSize) + this.pageSize)
      .get('http://localhost:3001/spreads')
      .toPromise()
      .then((data: any) => {
        this.data = data;
      })
      .catch((error) => {
        throw 'Data Loading Error';
      });

  }

  drop2(event: CdkDragDrop<Spread>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  onItemDrop(event: DragEvent) {
    event.preventDefault();
    var ble: string = this.cookieService.get("droppedData");
    var curTrg: any = event.currentTarget;
    curTrg.backgroundColor = 'yellow';
    curTrg.innerHTML = curTrg.innerHTML + "<p class='listItem'>" + this.cookieService.get("droppedData") + "</p>";
  }

  allowDrop(event: DragEvent) {
    event.preventDefault();
  }

  currentPage: number;
  onKeyUp(value: number) {
    this.currentPage = value;
  }
  changePage(p: PaginationControlsDirective) {
    p.setCurrent(this.currentPage);
  }


  Number(value: string) {
    return Number(value);
  }

  goToFirstPage(p: PaginationControlsDirective) {
    p.getTotalItems()/this.itemsPerPage
    if (p.getCurrent()*this.itemsPerPage>p.getTotalItems()){
      p.setCurrent(Math.floor(p.getTotalItems()/this.itemsPerPage));
    } else {
    p.getTotalItems()/p.getLastPage()*(p.getCurrent()-1)/this.itemsPerPage
      p.setCurrent(Math.floor(p.getTotalItems()/p.getLastPage()*(p.getCurrent()-1)/this.itemsPerPage));
    }

  }
}
