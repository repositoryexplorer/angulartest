import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';


export class Product{
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  quantity: number;
}

@Component({
  templateUrl: 'display-data.component.html',
})


export class DisplayDataComponent {

  priority: any[];

  @ViewChild(DxDataGridComponent) dg: DxDataGridComponent;
  products: Array<Product>;

  constructor(private httpClient: HttpClient) {
   // this.products = service.getCustomers();
    httpClient
      .get('http://localhost:3000/data')
      .toPromise()
      .then((data: any) => {
          this.products = data;
          console.log(this.products.length);
      })
      .catch((error) => {
        throw 'Data Loading Error';
      });

    this.onReorder = this.onReorder.bind(this);

    // function isNotEmpty(value: any): boolean {
    //   return value !== undefined && value !== null && value !== '';
    // }

    // this.dataSource = new CustomStore({
    //   key: 'id',
    //   load: function (loadOptions: any) {
    //     // let params: HttpParams = new HttpParams();
    //     // [
    //     //   'skip',
    //     //   'take',
    //     //   'requireTotalCount',
    //     //   'requireGroupCount',
    //     //   'sort',
    //     //   'filter',
    //     //   'totalSummary',
    //     //   'group',
    //     //   'groupSummary',
    //     // ].forEach(function (i) {
    //     //   if (i in loadOptions && isNotEmpty(loadOptions[i]))
    //     //     params = params.set(i, JSON.stringify(loadOptions[i]));
    //     // });
    //
    //   },
    // });

  }

  onReorder(e) {
    var visibleRows = e.component.getVisibleRows(),
      toIndex = this.products.indexOf(visibleRows[e.toIndex].data),
      fromIndex = this.products.indexOf(e.itemData);

    this.products.splice(fromIndex, 1);
    this.products.splice(toIndex, 0, e.itemData);
  }
}
