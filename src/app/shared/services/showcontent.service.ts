import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowcontentService {
  private showContentSubject = new Subject<any>();
  private perspectiveSubject = new Subject<string>();

  constructor() {

  }

  showHideContentClick() {
    this.showContentSubject.next('');
  }

  getSubject() {
    return this.showContentSubject;
  }

  perspectiveChanged(perspective: string) {
    this.perspectiveSubject.next(perspective);
  }

  getPerspectiveSubject() {
    return this.perspectiveSubject;
  }
}
