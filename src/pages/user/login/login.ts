import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import { UserService } from '../../UserService';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	it:any={
		fasd:true,
		fase:false
	}
	page:any={
		user:{
			username:'',
			password:''
		}
	}
		
	
	goto(){
		this.it.fasd=false;
		this.it.fase=true;
	}
	 //let _this = this;
	showalrt(i){
		let alert = this.alertCtrl.create({
					title:'警告',
					subTitle:i,
					buttons:['确认']
				})
				alert.present()
	}
	
	login(){
		let _this = this;
		if(this.page.user.username.length>3&&this.page.user.password.length>3){
			
			this.userService.post('login',this.page.user).then(function(data){
			if(data.data.success>0){
				var storage = localStorage;
						_this.navCtrl.pop();
						storage.setItem('loginState','true');
						storage.setItem('username',data.data.data.username)
						storage.setItem('email',data.data.data.email)
						storage.setItem('phone',data.data.data.phone)
						//console.log("成功")
			}else{
				_this.showalrt(data.data.info)
			}
		},function(err){
			console.log(err)
		})
	}else{
		this.showalrt("请填写内容")
		}
		
	}
  constructor( public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams,public userService:UserService) {

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
