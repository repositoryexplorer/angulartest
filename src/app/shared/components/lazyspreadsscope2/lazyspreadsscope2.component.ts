import {Component, ElementRef} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHandler, HttpParams} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CookieService} from 'ngx-cookie-service';
import {Spread} from '../lazyspreads/lazyspreads.component';

@Component({
  selector: 'app-lazyspreadsscope2',
  templateUrl: './lazyspreadsscope2.component.html',
  styleUrls: ['./lazyspreadsscope2.component.scss']
})
export class Lazyspreadsscope2Component {
  data: Spread[];
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

}

