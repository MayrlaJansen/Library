import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthService implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        const data = sessionStorage.getItem('start');
        if (data !== 'true') {
          this.router.navigate(['/login']);
          return false;
        }

        return true;
    }
}