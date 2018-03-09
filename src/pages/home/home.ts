import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RemoteDataService } from '../../app/services/remote-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  fleet$: Observable<any>;

  constructor(
    public navCtrl: NavController,
    private dataService: RemoteDataService
  ) {

  }

  ngOnInit(): void {
    this.fleet$ = this.dataService.getFleetById(1);
  }
}
