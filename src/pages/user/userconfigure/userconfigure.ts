import { Component } from '@angular/core';
import { AlertController, NavController, NavParams,LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-userconfigure',
  templateUrl: 'userconfigure.html',
})
export class UserconfigurePage {

  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }
  data={
  	conts:'79.8M',
  }
	presentLoadingDefault(){
		let loading = this.loadingCtrl.create({
		    content: 'Please wait...'
		  });
		
		  loading.present();
		
		  setTimeout(() => {
		    loading.dismiss();
		    this.data.conts='0M'
		  }, 5000);
	}
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserconfigurePage');
  }

}
