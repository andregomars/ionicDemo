import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

import { environment, DataSourceType } from '../../environments/environment';

@Injectable()
export class RemoteDataService {
  constructor(
    private http: HttpClient
  ) {
    this.sourceType = environment.dataSource;

    switch (this.sourceType) {
      case (DataSourceType.Firebase):
        this.rootUrl = environment.firebase.databaseURL;
        break;
      default:
        this.rootUrl = environment.apiRootLocal;
        break;
    }
  }

  private sourceType: DataSourceType;
  private rootUrl: string;

  getUserNotification(userId: string): Observable<any> {
    return this.http.get<any>(`${ this.rootUrl }/user/notification/${ userId }.json`);
  }

  getFleetById(fleetId: number): Observable<any> {
    return this.http.get<any>(`${ this.rootUrl }/fleet/${ fleetId }.json`);
  }

  getVehicleById(vehicleId: number): Observable<any> {
    return this.http.get<any>(`${ this.rootUrl }/vehicle/${ vehicleId }.json`);
  }
}