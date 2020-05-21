import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
@Component({
  templateUrl: 'display-data.component.html',
})
export class DisplayDataComponent {
  dataSource: any = {};
  priority: any[];

  @ViewChild(DxDataGridComponent) dg: DxDataGridComponent;




  constructor(private httpClient: HttpClient) {


    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }

    this.dataSource = new CustomStore({
      key: 'id',
      load: function (loadOptions: any) {
        let params: HttpParams = new HttpParams();
        [
          'skip',
          'take',
          'requireTotalCount',
          'requireGroupCount',
          'sort',
          'filter',
          'totalSummary',
          'group',
          'groupSummary',
        ].forEach(function (i) {
          if (i in loadOptions && isNotEmpty(loadOptions[i]))
            params = params.set(i, JSON.stringify(loadOptions[i]));
        });
        return httpClient
          .get('http://localhost:3000/data', { params: params })
          .toPromise()
          .then((data: any) => {
            return {
              data: data,
              totalCount: data.totalCount,
              summary: data.summary,
              groupCount: data.groupCount,
            };
          })
          .catch((error) => {
            throw 'Data Loading Error';
          });
      },
    });
    this.onReorder = this.onReorder.bind(this);
  }

  onReorder(e) {

    console.log('NAME: ' + this.dg.instance.getKeyByRowIndex(2));

  //  this.dg.instance.getDataSource().items().forEach(e=> {console.log(e)})

     var visibleRows = e.component.getVisibleRows(),
       toIndex = this.dg.instance.getDataSource().items().indexOf(visibleRows[e.toIndex].data),
       fromIndex = this.dg.instance.getDataSource().items().indexOf(e.itemData);
    this.dg.instance.getDataSource().items().splice(fromIndex, 1);
    this.dg.instance.getDataSource().items().splice(toIndex, 0, e.itemData);

    //this.dg.instance.getDataSource().items().forEach(f=> {console.log(f)});

  }
}
