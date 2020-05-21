import { Component } from '@angular/core';
import {ShowcontentService} from '../../shared/services/showcontent.service';

@Component({
  selector: 'app-flatplan2',
  templateUrl: './flatplan2.component.html',
  styleUrls: ['./flatplan2.component.scss']
})
export class Flatplan2Component {
  contentVisible: boolean = false;
  basic: boolean = true;
  print: boolean = false;

  constructor(private service: ShowcontentService) {
    service.getSubject().subscribe(
      anyVar => {
        this.contentVisible = !this.contentVisible;
      });

    service.getPerspectiveSubject().subscribe(
      perspective => {
        if (perspective === 'print') {
          this.basic = false;
          this.print = true;
        } else {
          this.print = false;
          this.basic = true;
        }
      });
  }
}

