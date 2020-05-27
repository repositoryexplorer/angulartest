import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-oldplanning',
  templateUrl: './oldplanning.component.html',
  styleUrls: ['./oldplanning.component.scss']
})


export class OldplanningComponent implements OnInit {
  url: any;

  constructor(private sanitizer: DomSanitizer) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:40080/PriintPlanner/?content=dynamic&configname=panels/Planning.xml&modelname=dev01&debug=true&locale=en&sessionid=70e8f00e-4922-4c88-be1f-dbad9c09c16e');
  }

  ngOnInit() {
    //this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.id);
  }

}
