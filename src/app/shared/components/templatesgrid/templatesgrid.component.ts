import { Component } from '@angular/core';
import 'devextreme/data/odata/store';
import CustomStore from 'devextreme/data/custom_store';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import {CookieService} from "ngx-cookie-service";



export class Template {
  id: number;
  name: string;
}

@Component({
  selector: 'app-templatesgrid',
  templateUrl: './templatesgrid.component.html',
  styleUrls: ['./templatesgrid.component.scss']
})
export class TemplatesgridComponent {
  dataSource: Array<Template> = [{"id":1, "name":"retail_ProductText"},{"id":2, "name":"retail_Image+Price"},{"id":3, "name":"retail_Detail Image"},
                                {"id":4, "name":"retail_Image+Detail+Price"}, {"id":5, "name":"tsg_Icon"}, {"id":6, "name":"tsg_Angebot"}];
  templates: Template[] = [{"id":1, "name":"Test1"},{"id":2, "name":"Test2"}];
  @ViewChild(DxDataGridComponent) dg: DxDataGridComponent;




  constructor(private httpClient: HttpClient,  private cookieService: CookieService) {

    function isNotEmpty(value: any): boolean {
      return value !== undefined && value !== null && value !== '';
    }

  //  this.dataSource = this.getDataSource();

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

  getTemplates() {
    return this.templates;
  }


  getDataSource() {
    var self = this;
    return new CustomStore({
      key: 'id',
      load: function (loadOptions: any) {
        self.getTemplates().forEach(e => {console.log("Template: " + e.id + " name: " + e.name)});
        return this.templates;
      },

    });
  }

  onDragStart(event: any, text: string) {
    this.cookieService.set("droppedTemplate", text);
  }

  onDragEnd(event: any) {

     this.cookieService.delete("droppedTemplate");
  }
}
