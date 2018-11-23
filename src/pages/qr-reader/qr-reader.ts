import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'

@Component({
  selector: 'page-qr-reader',
  templateUrl: 'qr-reader.html',
})
export class QrReaderPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private qrScanner: BarcodeScanner
    ) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrReaderPage');
  }

  scan() {
    this.qrScanner.scan().then(qrData => {
      console.log(qrData);
    }).catch(err => {
      console.log('scan err', err);
    });
  }

}
