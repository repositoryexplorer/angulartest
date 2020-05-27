import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthService, AppInfoService } from '../../services';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxCheckBoxModule } from 'devextreme-angular/ui/check-box';
import { DxTextBoxModule } from 'devextreme-angular/ui/text-box';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';
import { DxValidationGroupModule } from 'devextreme-angular/ui/validation-group';
import { Subscription } from 'rxjs';
import {DxLoadPanelModule} from "devextreme-angular";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  login = '';
  password = '';
  loginText = '';
  subscription: Subscription;
  isVisible: boolean = false;

  constructor(private authService: AuthService, public appInfo: AppInfoService) {
    this.subscription = authService.getLoggedSubject().subscribe(
      isLogged => {
        this.loginText = isLogged ? '' : 'Wrong username or password !';
      });
  }

  onShown(e: any) {

    setTimeout(() => {
      this.isVisible = false;
    }, 600);
  }

  onHidden(e: any) {

  }

  onLoginClick(args) {
    this.isVisible = true;
    setTimeout(() => {
      this.authService.logIn(this.login, this.password, this.isVisible);
    }, 200);


  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxButtonModule,
    DxCheckBoxModule,
    DxTextBoxModule,
    DxValidatorModule,
    DxValidationGroupModule,
    DxLoadPanelModule
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ]
})
export class LoginFormModule { }
