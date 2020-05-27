import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {
  SideNavOuterToolbarModule,
  SideNavInnerToolbarModule,
  SingleCardModule,
} from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import {TreeTestService} from './shared/services/treetest.service';
import { GallerytestComponent } from './pages/gallerytest/gallerytest.component';
import {
    DxContextMenuModule,
    DxDataGridModule, DxLoadPanelModule,
    DxScrollViewModule,
    DxTileViewModule,
    DxToolbarModule,
    DxTreeListModule,
    DxTreeViewModule
} from 'devextreme-angular';
import { Gallery2Component } from './pages/gallery2/gallery2.component';
import { DxTemplateModule, DxButtonModule, DxPopupModule, DxPopoverModule, DxDraggableModule } from 'devextreme-angular';
import { FlatplanComponent } from './pages/flatplan/flatplan.component';
import { FlatplantoolbarComponent } from './pages/flatplan/flatplantoolbar/flatplantoolbar.component';
import {ShowcontentService} from './shared/services/showcontent.service';
import { TemplatesgridComponent } from './shared/components/templatesgrid/templatesgrid.component';
import { BucketsgridComponent } from './shared/components/bucketsgrid/bucketsgrid.component';
import {DxiColumnModule, DxoFilterRowModule, DxoPagerModule, DxoPagingModule, DxoRowDraggingModule} from 'devextreme-angular/ui/nested';
import { SpreadsgalleryComponent } from './shared/components/spreadsgallery/spreadsgallery.component';
import { LazyspreadsComponent } from './shared/components/lazyspreads/lazyspreads.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {CookieService} from 'ngx-cookie-service';
import { Lazyspreadsscope2Component } from './shared/components/lazyspreadsscope2/lazyspreadsscope2.component';
import { Flatplan2Component } from './pages/flatplan2/flatplan2.component';
import { PrintpreviewComponent } from './pages/flatplan2/printpreview/printpreview.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {FormsModule} from "@angular/forms";
import { OldplanningComponent } from './pages/oldplanning/oldplanning.component';

@NgModule({
  declarations: [AppComponent, GallerytestComponent, Gallery2Component, FlatplanComponent, FlatplantoolbarComponent,
    TemplatesgridComponent, BucketsgridComponent, SpreadsgalleryComponent, LazyspreadsComponent, Lazyspreadsscope2Component, Flatplan2Component, PrintpreviewComponent, OldplanningComponent,
    ],
    imports: [
        BrowserModule,
        SideNavOuterToolbarModule,
        SideNavInnerToolbarModule,
        SingleCardModule,
        FooterModule,
        LoginFormModule,
        AppRoutingModule,
        HttpClientModule,
        DxTileViewModule,
        DxTemplateModule, DxButtonModule, DxPopupModule, DxPopoverModule, DxDraggableModule, DxToolbarModule, DxiColumnModule,
        DxoRowDraggingModule, DxoPagingModule, DxoPagerModule, DxoFilterRowModule, DxDataGridModule, DxTreeViewModule,
        ScrollingModule, DragDropModule,
        BrowserAnimationsModule, DxTreeListModule, NgxPaginationModule, FormsModule, DxScrollViewModule, DxLoadPanelModule, DxContextMenuModule
    ],
  providers: [AuthService, ScreenService, AppInfoService, TreeTestService, ShowcontentService, CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
