import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: "AIzaSyBA4LqXy0mwe_bLQxn0ulImAgkV7NTszOA",
      authDomain: "chamadaapp-1090481613034.firebaseapp.com",
      databaseURL: "https://chamadaapp-1090481613034.firebaseio.com",
      projectId: "chamadaapp-1090481613034",
      storageBucket: "chamadaapp-1090481613034.appspot.com",
      messagingSenderId: "440806468030"
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

