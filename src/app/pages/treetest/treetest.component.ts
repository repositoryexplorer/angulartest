import { CommonModule } from '@angular/common';
import { NgModule, Component, OnInit } from '@angular/core';
import { Product, TreeTestService } from '../../shared/services/treetest.service';
import { UUID } from 'angular2-uuid';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  templateUrl: 'treetest.component.html',
  styleUrls: ['./treetest.component.scss']
})
export class TreetestComponent implements OnInit {
  products: Array<Product>;
  currentItem: Product;

  constructor(service: TreeTestService) {
    console.log("constructor");
    this.products = service.getProducts();
    this.currentItem = this.products[0];
  }
  selectItem(e) {
    this.currentItem = e.itemData;
    this.currentItem.image += "?tmp="+UUID.UUID();
  }

  ngOnInit() {

  }

  onReorder(e) {
    var visibleRows = e.component.getVisibleRows(),
      toIndex = this.products.indexOf(visibleRows[e.toIndex].data),
      fromIndex = this.products.indexOf(e.itemData);

    this.products.splice(fromIndex, 1);
    this.products.splice(toIndex, 0, e.itemData);
  }

  //moveItemInArray(this.items, event.previousIndex, event.currentIndex);
}
