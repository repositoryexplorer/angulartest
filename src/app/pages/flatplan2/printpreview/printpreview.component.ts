import { NgModule, Component, enableProdMode } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxTemplateModule, DxButtonModule, DxPopupModule, DxPopoverModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import {Gallery2ServiceService, House} from '../../../shared/services/gallery2-service.service';


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
  houses: House[];
  currentHouse: House;
  popupVisible = false;
  ADD_TO_FAVORITES = "Add to Favorites";
  REMOVE_FROM_FAVORITES = "Remove from Favorites";

  constructor(service: Gallery2ServiceService) {
    this.houses = service.getSpreads();
    this.currentHouse = this.houses[0];
  }

  showHouse(house: House) {
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
}

