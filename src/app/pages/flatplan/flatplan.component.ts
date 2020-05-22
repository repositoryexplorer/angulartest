import { Component } from '@angular/core';
import {ShowcontentService} from '../../shared/services/showcontent.service';

@Component({
  selector: 'app-flatplan',
  templateUrl: './flatplan.component.html',
  styleUrls: ['./flatplan.component.scss']
})
export class FlatplanComponent {
  contentVisible: boolean = false;
  isVisible: boolean = true;

  constructor(private service: ShowcontentService) {
    service.getSubject().subscribe(
      anyVar => {
        this.contentVisible = !this.contentVisible;
      });
  }

  onShown(e: any) {
    setTimeout(() => {
      this.isVisible = false;
    }, 300);
  }

  onHidden(e: any) {

  }
}
