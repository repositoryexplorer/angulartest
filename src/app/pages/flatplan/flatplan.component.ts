import { Component } from '@angular/core';
import {ShowcontentService} from '../../shared/services/showcontent.service';

@Component({
  selector: 'app-flatplan',
  templateUrl: './flatplan.component.html',
  styleUrls: ['./flatplan.component.scss']
})
export class FlatplanComponent {
  contentVisible: boolean = false;

  constructor(private service: ShowcontentService) {
    service.getSubject().subscribe(
      anyVar => {
        this.contentVisible = !this.contentVisible;
      });
  }
}
