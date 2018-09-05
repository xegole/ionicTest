import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { ApiProvider } from '../api/api';

@Injectable()
export class SwapiProvider {

  constructor(public api: ApiProvider) { }

  getFilms() {
    let seq = this.api.get('films');
    return seq;
  }

  getStarShips(){
    let seq = this.api.get('starships');
    return seq;
  }

  getVehicles(){
    let seq = this.api.get('vehicles');
    return seq;
  }
}
