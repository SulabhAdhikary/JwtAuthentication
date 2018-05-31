import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../BaseComponent';
import { PersistStorageUtility } from '../services/PersistInStorage';

@Component({
  selector: 'app-dashboardcomponent',
  templateUrl: './dashboardcomponent.component.html',
  styleUrls: ['./dashboardcomponent.component.scss']
})
export class DashboardcomponentComponent extends BaseComponent implements OnInit {

  constructor( protected authPsedu: PersistStorageUtility ) {
     super(authPsedu);
  }

  ngOnInit() {
  }

}
