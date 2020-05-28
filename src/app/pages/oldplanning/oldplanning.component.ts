import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-oldplanning',
  templateUrl: './oldplanning.component.html',
  styleUrls: ['./oldplanning.component.scss']
})


export class OldplanningComponent {
  url: any;
  sessionId: string = '';
  postUrl: any;
  //headers.set('Authorization', 'Basic ' + base64.encode('dev:priintdev')
  constructor(private sanitizer: DomSanitizer, private httpClient: HttpClient) {
    this.url = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:40080/PriintPlanner/?content=dynamic&configname=panels/Planning.xml&modelname=dev01&debug=true&locale=en&sessionid=0071bba6-9995-49d1-aec8-0ac3f54c95be');
    // var options = { headers: {'Access-Control-Allow-Origin': '*',
    //                           'Access-Control-Allow-Credentials': 'true',
    //                           'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
    //                           'Access-Control-Allow-Headers': 'Content-Type, Accept'},
    //               params: {'username': 'dev',  'password': 'priintdev', 'db': 'aio'}};
    // this.postUrl = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:40080/CometServer/linksServlet');
    // this.httpClient.post('http://localhost:40080/CometServer/linksServlet', '', options).toPromise()
    //   .then((data: any) => {
    //     this.sessionId = this.getSessionIdFromData(data);
    //     console.log(this.sessionId + " ");
    //     this.url = sanitizer.bypassSecurityTrustResourceUrl('http://localhost:40080/PriintPlanner/?content=dynamic&configname=panels/Planning.xml&modelname=dev01&debug=true&locale=en&sessionid='+this.sessionId);
    //   })
    //   .catch((error) => {
    //     throw 'Data Loading Error';
    //   });
  }


  private getSessionIdFromData(data: any) {
    return '';
  }
}
