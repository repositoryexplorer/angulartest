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
  products: Product[];
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
}
