import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, LoadingController } from 'ionic-angular';
import { SwapiProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {
  currentItems: Item[];
  loading;

  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public swapi:SwapiProvider) {
    this.getVehicles();
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  private getVehicles(){
    this.swapi.getVehicles().subscribe((resp)=>{
      console.log( resp['results']);
      this.currentItems = resp['results'];
      this.loading.dismiss();
    }, (err) => {
      console.error('ERROR', err);
      this.loading.dismiss();
    })
  }
}
