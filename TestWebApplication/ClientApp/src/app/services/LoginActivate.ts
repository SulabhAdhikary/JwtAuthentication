import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot , Router, ActivatedRoute} from '@angular/router';
import { Injectable } from '@angular/core';
import { BaseComponent } from '../BaseComponent';
import { PersistStorageUtility } from './PersistInStorage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginActivate extends BaseComponent implements CanActivate {
  constructor(protected authPsedu: PersistStorageUtility , private router: Router) {
      super(authPsedu);
  }
  canActivate(): boolean {
      console.log('called');
    if (!this.CheckUserLoggedIn()) {
      this.router.navigate(['login']);
    }
    return true;
  }
}

