import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item, LoadingController, ModalController } from 'ionic-angular';
import { SwapiProvider } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {

  currentItems: Item[];
  loading;

  constructor(public modalCtrl: ModalController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams, public swapi: SwapiProvider) {
    this.getFilmsFromSwapi();
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.loading.present();
  }

  private getFilmsFromSwapi() {
    console.log('Init films');
    this.swapi.getFilms().subscribe((resp) => {
      console.log(resp['results']);
      this.currentItems = resp['results'];
      this.loading.dismiss();
    }, (err) => {
      console.error('ERROR', err);
      this.loading.dismiss();
    });
  }

  openPeople(item: Item) {
    let addModal = this.modalCtrl.create('ItemDetailPage',{item: item});
    addModal.present();
  }
}
