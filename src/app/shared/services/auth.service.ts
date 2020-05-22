import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { Subject }    from 'rxjs';

@Injectable()
export class AuthService {
  private loggedSubject = new Subject<boolean>();
  private currentRoute = new Subject<string>();
  loggedIn = false;

  constructor(private router: Router) {}

  logIn(login: string, passord: string) {
    if (login === '' || (login === 'dev' && passord === 'priintdev')) {
      this.loggedIn = true;
      this.router.navigate(['/']);
    } else {
      this.loggedIn = false;
    //  this.router.navigate(['/login-form']);
    }
    this.loggedSubject.next(this.loggedIn);
  }

  logOut() {
    this.loggedIn = false;
    this.router.navigate(['/login-form']);
  }

  get isLoggedIn() {
    return this.loggedIn;
  }

  getLoggedSubject() {
    return this.loggedSubject;
  }

  getCurrentRoute() {
    return this.currentRoute;
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const isLoggedIn = this.authService.isLoggedIn;
        const isLoginForm = route.routeConfig.path === 'login-form';

        if (isLoggedIn && isLoginForm) {
            this.router.navigate(['/']);
            return false;
        }

        if (!isLoggedIn && !isLoginForm) {
            this.router.navigate(['/login-form']);
        }

        return isLoggedIn || isLoginForm;
    }
}
