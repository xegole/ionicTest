import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SwapiProvider, ApiProvider } from '../providers';
import { TabsHomePage } from '../pages/tabs-home/tabs-home';
import { FilmsPage } from '../pages/films/films';
import { StarshipsPage } from '../pages/starships/starships';
import { VehiclesPage } from '../pages/vehicles/vehicles';

import { Firebase } from '@ionic-native/firebase';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FcmProvider } from '../providers/fcm/fcm';

const config = {
  apiKey: "AIzaSyCdziDu7soZ2g-TozgRx2YyB_ug2luejDA",
  authDomain: "chat-demo-9dccf.firebaseapp.com",
  databaseURL: "https://chat-demo-9dccf.firebaseio.com",
  projectId: "chat-demo-9dccf",
  storageBucket: "chat-demo-9dccf.appspot.com",
  messagingSenderId: "997630960709"
}

@NgModule({
  declarations: [
    MyApp,
    TabsHomePage,
    FilmsPage,
    StarshipsPage,
    VehiclesPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config), 
    AngularFirestoreModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsHomePage,
    FilmsPage,
    StarshipsPage,
    VehiclesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider,
    SwapiProvider,
    Firebase,
    FcmProvider,
  ]
})
export class AppModule { }
