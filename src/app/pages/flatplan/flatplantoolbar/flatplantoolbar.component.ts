import {Component, ElementRef, ViewChild} from '@angular/core';

import {ShowcontentService} from '../../../shared/services/showcontent.service';
import {Flatplan2Component} from "../../flatplan2/flatplan2.component";

@Component({
  selector: 'app-flatplantoolbar',
  templateUrl: './flatplantoolbar.component.html',
  styleUrls: ['./flatplantoolbar.component.scss']
})
export class FlatplantoolbarComponent  {
  flatplan2 : Flatplan2Component;
  items: any[];
  isGreen: boolean = true;
  @ViewChild('basic') basicImg: ElementRef;
  @ViewChild('print') printImg: ElementRef;
  constructor(private service: ShowcontentService, private f: Flatplan2Component) {
    this.flatplan2 = f;
  }

  onAssignClick() {
    this.service.showHideContentClick();
    this.isGreen = !this.isGreen;
  }

  public printClicked() {
    if (!this.perspectiveActive(this.printImg.nativeElement)) {
      var src: string = this.printImg.nativeElement.src;
      var basicSrc: string = this.basicImg.nativeElement.src;
      this.printImg.nativeElement.src = src.replace("_gray", "");
      this.basicImg.nativeElement.src = basicSrc.replace(".png", "_gray.png");
      this.service.perspectiveChanged('print');
    }
  }

  private perspectiveActive(nativeElement: any) {
    var src: string = nativeElement.src;
    console.log(src.indexOf('gray') + "  BBB: " + (src.indexOf('gray') < 0));

    return src.indexOf('gray') < 0;
  }

  public basicClicked() {
    if (!this.perspectiveActive(this.basicImg.nativeElement)) {
      var src: string = this.basicImg.nativeElement.src;
      var printSrc: string = this.printImg.nativeElement.src;
      this.basicImg.nativeElement.src = src.replace("_gray", "");
      this.printImg.nativeElement.src = printSrc.replace(".png", "_gray.png");
      this.service.perspectiveChanged('basic');
      this.flatplan2.setVisible(true);
      this.flatplan2.setLoadingTime(500);
    }
  }
}
