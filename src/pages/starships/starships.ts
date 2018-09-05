import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SwapiProvider } from '../../providers';
import { Item } from '../../model/item';

@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

  currentItems: Item[];
  loading;

  constructor(public loadingCtrl: LoadingController,public navCtrl: NavController, public navParams: NavParams, public swapi: SwapiProvider) {
    this.getStarShips()
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
  
    this.loading.present();
  }

  private getStarShips(){
    this.swapi.getStarShips().subscribe((resp) => {
      console.log( resp['results']);
      this.currentItems = resp['results'];
      this.loading.dismiss();
    }, (err) => {
      console.error('ERROR', err);
      this.loading.dismiss();
    });
  }
}
