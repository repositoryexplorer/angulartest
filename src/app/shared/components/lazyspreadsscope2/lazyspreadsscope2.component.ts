import {Component, ElementRef, Inject, ViewChild} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHandler, HttpParams} from '@angular/common/http';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {CookieService} from 'ngx-cookie-service';
import {Spread} from '../lazyspreads/lazyspreads.component';
import {PaginationControlsDirective} from 'ngx-pagination';
import {Page} from 'ngx-pagination/dist/pagination-controls.directive';
import { DOCUMENT } from '@angular/common';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-lazyspreadsscope2',
  templateUrl: './lazyspreadsscope2.component.html',
  styleUrls: ['./lazyspreadsscope2.component.scss']
})
export class Lazyspreadsscope2Component {
  private document: any;
  items: any;
  constructor(private httpClient: HttpClient, private cookieService: CookieService, @Inject(DOCUMENT) document) {
    this.document = document;

    this.items = [{
      text: 'Share',
      items: [
        { text: 'Facebook' },
        { text: 'Twitter' }]
    },
      { text: 'Download' },
      { text: 'Comment' },
      { text: 'Favorite' }
    ];




    this.httpClient
      // ?_start=' + (page * this.pageSize) + '&_end=' + ((page * this.pageSize) + this.pageSize)
      .get('http://localhost:3001/spreads')
      .toPromise()
      .then((data: any) => {
        this.data = data;
      })
      .catch((error) => {
        throw new Error('Data Loading Error');
      });

  }


  itemClick(e) {
    if (!e.itemData.items) {
      notify("The \"" + e.itemData.text + "\" item was clicked", "success", 1500);
    }
  }

  data: Array<Spread>;
  isDragOfDiv = false;
  itemsPerPage = 5;
  p2: any;
  @ViewChild('templateLabel') templateLabel: ElementRef;
  @ViewChild('spread') spread: ElementRef;

  currentPage = 1;

  drop2(event: CdkDragDrop<Spread>) {
    moveItemInArray(this.data, event.previousIndex, event.currentIndex);
  }

  onItemDrop(event: DragEvent) {
    event.preventDefault();
    let ble: string = this.cookieService.get('droppedData');
    let curTrg: any = event.currentTarget;
    curTrg.backgroundColor = 'yellow';

    const id = ble.substring(0, ble.indexOf('|'));
    const label = ble.substring(ble.indexOf('|') + 1);

    curTrg.innerHTML = curTrg.innerHTML + '<div id=' + id + ' style=\'  border: 1px solid lightgray;\n' +
      '  widht:100%;\n' +
      '  height: 22px;\n' +
      '  text-align: center;\n' +
      '  background-color: white;\'>' + label + '</div>';
  }

  allowDrop(event: DragEvent) {
    if (this.cookieService.get('droppedData') !== '') {
      event.preventDefault();
    }
  }

  onDragStart($event: DragEvent, index: number) {
    this.cookieService.set('divDrag', 'drag');
    this.cookieService.set('divDragIndex', index.toString(10));
    this.isDragOfDiv = true;
  }

  onDragEnd(event: DragEvent) {
    this.cookieService.delete('divDrag');
    this.isDragOfDiv = false;
    this.removeDropCss(event);
  }
// =======================================================
  allowDrop2(event: DragEvent) {


    if (this.cookieService.get('divDrag') !== '') {
      let trg: any = event.currentTarget;

      if (trg.className.indexOf('onDragOver') === -1){
        trg.className += ' onDragOver';
      }

     // style.border = 'solid 1px green';
      //trg.style.opacity = '0.2';


      event.preventDefault();

    }
  }

  allowDropOnPage(event: DragEvent) {


    if (this.cookieService.get('droppedTemplate') !== '') {
      event.preventDefault();

    }
  }

  array_move(arr, old_index, new_index) {
    if (new_index >= arr.length) {
      let k = new_index - arr.length + 1;
      while (k--) {
        arr.push(undefined);
      }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr; // for testing
  }

  onDropOnPage(event: any, index: number, index2: number) {
    console.log('inside dropsssss');
    if (this.cookieService.get('droppedTemplate') !== '') {

      let ala: string;
      ala = 'templateBox'+index + '_' + index2;
      const kabum : any = document.getElementById(ala);
      kabum.style = 'opacity: 1.0';
      kabum.title = this.cookieService.get('droppedTemplate');
      kabum.innerHTML = this.cookieService.get('droppedTemplate');


      event.preventDefault();

    }
  }

  onDrop(event: any, index: number) {


    if (this.cookieService.get('divDrag') !== '') {
      event.preventDefault();

      let tempIndex : number = (this.currentPage - 1) * this.itemsPerPage;
      let srcIndex: number = Number(this.cookieService.get('divDragIndex')) + tempIndex;
      let trg: any = this.data[srcIndex];

      /// trg.innerHTML="<p>SRC</p>";

      let curTrg: any = event.currentTarget;

     // this.data.splice(srcIndex, 1);

      // this.data.splice(index, 1, trg);

      const trgIndex: number = (index + ((this.currentPage - 1) * this.itemsPerPage));
      this.array_move(this.data, srcIndex, trgIndex);

      this.removeDropCss(event);
    }
  }

  onDragLeave(event: DragEvent) {
    this.removeDropCss(event);
  }

  private removeDropCssByHTMLElement(spread: ElementRef) {

    spread.nativeElement.className = spread.nativeElement.className.replace('onDragOver', '');

  }

  private removeDropCss(event: DragEvent) {
    let trg: any = event.currentTarget;
    //trg.style.border = '1px dotted red';
    //trg.style.opacity = '1.0';
    trg.className = trg.className.replace('onDragOver', '');
   // trg.removeClass('onDragOver');
  }
  onKeyUp(value: number) {
    this.currentPage = value;
  }

  Number(value: string) {
    return Number(value);
  }

  changePage(p: PaginationControlsDirective) {
    p.setCurrent(this.currentPage);
  }

  previousClick(p: PaginationControlsDirective) {
    p.previous();
    this.currentPage = p.getCurrent() - 1;
  }

  nextClick(p: PaginationControlsDirective) {
    p.next();
    this.currentPage = p.getCurrent() + 1;
  }

  onPage(p: PaginationControlsDirective, page: Page) {
    p.setCurrent(page.value);
    this.currentPage = page.value;
  }

  goToFirstPage(p: PaginationControlsDirective) {

    if (p.getCurrent() * this.itemsPerPage > p.getTotalItems()){
      p.setCurrent(Math.floor(p.getTotalItems() / this.itemsPerPage));
    } else {

      p.setCurrent(Math.floor(p.getTotalItems() / p.getLastPage() * ( p.getCurrent() - 1 ) / this.itemsPerPage));
    }

  }

  onClick($event: MouseEvent, spread: Spread) {
    this.data.forEach(item => {
        item.isSelected = false;
    });
    console.log(spread.id);
    spread.isSelected = true;
    $event.stopPropagation();
  }

  onGalleryClick() {
    this.data.forEach(item => {
      item.isSelected = false;
    });
  }
}

