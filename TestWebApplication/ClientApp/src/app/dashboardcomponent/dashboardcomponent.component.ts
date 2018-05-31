import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../BaseComponent';
import { PersistStorageUtility } from '../services/PersistInStorage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboardcomponent',
  templateUrl: './dashboardcomponent.component.html',
  styleUrls: ['./dashboardcomponent.component.scss']
})
export class DashboardcomponentComponent extends BaseComponent implements OnInit {

  constructor(protected authPsedu: PersistStorageUtility, private activatedRoute: ActivatedRoute,
    private router: Router) {
     super(authPsedu);
  }

  ngOnInit() {
  }

  LogoutClick() {
    console.log('clicked');
    this.authPsedu.LogOutCurrentUser();
    this.router.navigate(['login']);
  }

}
