import { Component } from '@angular/core';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent {
  employee: any;
  colCountByScreen: object;

  constructor() {
    this.employee = {
      ID: 7,
      FirstName: 'Przemek',
      LastName: 'Linik',
      Prefix: 'Mr.',
      Position: 'Developer',
      Picture: 'images/employees/06.png',
      BirthDate: new Date('1977/07/22'),
      HireDate: new Date('2008/01/02'),
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Przemek is a Java, ActionScript and JavaScript developer.',
      Address: 'Middle Poland ;-)'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }
}
