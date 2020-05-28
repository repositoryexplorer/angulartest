import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import {HttpClient, RequestOptions} from '@angular/common/http';


@Component({
  selector: 'app-oldplanning',
  templateUrl: './oldplanning.component.html',
  styleUrls: ['./oldplanning.component.scss']
})


export class OldplanningComponent implements OnInit {
  url: any;
  sessionId: string = '';

  constructor(private sanitizer: DomSanitizer, private httpClient: HttpClient) {
    var options = { params: {username: 'dev',  password: 'priintdev', db: 'aio'}};

    this.httpClient.post(sanitizer.bypassSecurityTrustResourceUrl('http://localhost:40080/CometServer/linksServlet')).toPromise()
      .then((data: any) => {
        this.sessionId = this.getSessionIdFromData(data);
        console.log(this.sessionId);
        this.url = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:40080/PriintPlanner/?content=dynamic&configname=panels/Planning.xml&modelname=dev01&debug=true&locale=en&sessionid='+this.sessionId);
      })
      .catch((error) => {
        throw 'Data Loading Error';
      });
  }



}
