import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';

@Component({
  selector: 'page-release',
  templateUrl: 'release.html',
})
export class ReleasePage {

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReleasePage');
  }

}
