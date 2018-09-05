import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { FilmsPage } from '../films/films';
import { StarshipsPage } from '../starships/starships';
import { VehiclesPage } from '../vehicles/vehicles';

@IonicPage()
@Component({
  selector: 'page-tabs-home',
  templateUrl: 'tabs-home.html'
})
export class TabsHomePage {

  tabFilmsRoot = FilmsPage;
  tabStarShipsRoot = StarshipsPage;
  tabVehiclesRoot = VehiclesPage;

  constructor(public nav: NavController) {
  }
}
