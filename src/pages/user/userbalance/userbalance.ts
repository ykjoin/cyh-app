import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-userbalance',
  templateUrl: 'userbalance.html',
})
export class UserbalancePage {

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserbalancePage');
  }

}
