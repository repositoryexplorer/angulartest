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
  data: Array<Spread>;
  isDragOfDiv: boolean = false;
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
    if (this.cookieService.get("droppedData") !== "") {
      event.preventDefault();
    }
  }

  onDragStart($event: DragEvent, index: number) {
    this.cookieService.set("divDrag", "drag");
    this.cookieService.set("divDragIndex", index);
    this.isDragOfDiv = true;
  }

  onDragEnd(event: DragEvent) {
    this.cookieService.delete("divDrag");
    this.isDragOfDiv = false;
    this.removeDropCss(event);
  }
//=======================================================
  allowDrop2(event: DragEvent) {
    if (this.cookieService.get("divDrag") !== "") {
      var trg: any = event.currentTarget;
      trg.style.border = 'solid 1px green'
      trg.style.opacity = "0.2";
      event.preventDefault();
    }
  }
  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  }

  onDrop(event: DragEvent, index: number) {
    if (this.cookieService.get("divDrag") !== "") {
      event.preventDefault();

      var srcIndex: number = this.cookieService.get("divDragIndex");
      var trg: any = this.data[srcIndex];

      ///trg.innerHTML="<p>SRC</p>";

      var curTrg: any = event.currentTarget;

     // this.data.splice(srcIndex, 1);

      //this.data.splice(index, 1, trg);

      this.array_move(this.data, srcIndex, index);

      this.removeDropCss(event);
    }
  }

  onDragLeave(event: DragEvent) {
    this.removeDropCss(event);
  }

  private removeDropCss(event: DragEvent) {
    var trg: any = event.currentTarget;
    trg.style.border = '1px dotted lightgray';
    trg.style.opacity = "1.0";
  }
}

