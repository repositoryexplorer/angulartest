import { NgModule, Component, enableProdMode } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTemplateModule, DxButtonModule, DxPopupModule, DxPopoverModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import {Gallery2ServiceService, House2} from '../../../shared/services/gallery2-service.service';
import {CookieService} from 'ngx-cookie-service';


if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-printpreview',
  templateUrl: './printpreview.component.html',
  styleUrls: ['./printpreview.component.scss'],
  providers: [Gallery2ServiceService]
})
export class PrintpreviewComponent {
  galleryItems: Array<House2>;
  currentHouse: House2;
  popupVisible = false;
  ADD_TO_FAVORITES = "Add to Favorites";
  REMOVE_FROM_FAVORITES = "Remove from Favorites";
  isVisible: boolean = true;

  constructor(service: Gallery2ServiceService, private cookieService: CookieService) {
    this.galleryItems = service.getSpreads();
    this.currentHouse = this.galleryItems[0];
  }

  showHouse(house: House2) {
    this.currentHouse = house;
    this.popupVisible = true;
  }

  changeFavoriteState() {
    let favoriteState = !this.currentHouse.Favorite;
    let message = "This item has been "
      + (favoriteState ? "added to" : "removed from")
      + " the Favorites list!";
    this.currentHouse.Favorite = favoriteState;

    notify({
        message: message,
        width: 450
      },
      favoriteState ? "success" : "error",
      2000);
  }

  onDragOver(event: DragEvent, house: House2) {
    if (this.cookieService.get('draggedGalleryItem') !== '') {
      event.preventDefault();
      let trg: any = event.currentTarget;
      if (trg.className.indexOf('onDragOver') === -1){
        trg.className += ' onDragOver';
      }
    }
  }

  onDragStart($event: DragEvent, house: House2, index: number) {
    if (this.cookieService.get('draggedGalleryItem') === '') {
      this.cookieService.set('draggedGalleryItem', String(house.ID));
      this.cookieService.set('galleryItemDragIndex', String(index));
    }
  }

  onDragEnd(event: DragEvent) {
    this.cookieService.delete('draggedGalleryItem');
    this.cookieService.delete('galleryItemDragIndex');
  }

  onDrop(event: DragEvent, house: House2, dropIndex: number) {
    if (this.cookieService.get('draggedGalleryItem') !== '') {
      event.preventDefault();

      let srcIndex: number = Number(this.cookieService.get('galleryItemDragIndex'));
      let trg: any = this.galleryItems[srcIndex];
      let curTrg: any = event.currentTarget;
      this.array_move(this.galleryItems, srcIndex, dropIndex);
      this.removeDropCss(event);
    }
  }

  onDragLeave(event: DragEvent) {
    this.removeDropCss(event);
  }

  private removeDropCss(event: DragEvent) {
    let trg: any = event.currentTarget;
    trg.className = trg.className.replace('onDragOver', '');
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

  onShown(e: any) {

    setTimeout(() => {
      this.isVisible = false;
    }, 600);
  }

  onHidden(e: any) {

  }
}

