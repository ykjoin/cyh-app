import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserIfPage } from './user-if/user-if';
import { CarinfoPage } from './carinfo/carinfo';
import { UserbalancePage } from './userbalance/userbalance';
import { UserconfigurePage } from './userconfigure/userconfigure';
import { ReleasePage } from './release/release';
import { LoginPage } from './login/login';
import { UserService } from '../UserService';


@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public userService:UserService) {
  }
  page:any={
    title:"我的",
    upic:"assets/images/uPic.png",
    username:"小毛",
    ptho:"1238u44329874329874879",
    userlogin:true,
    password:'',
    zhen:false,
    jia:true,
    email:''
  }


  


  gotoUserInfo(){
    this.navCtrl.push(UserIfPage,this.page);
    
  }
  gotoCarrInfo(){
    this.navCtrl.push(CarinfoPage,this.page);
  }
  gotobalanceInfo(){
    this.navCtrl.push(UserbalancePage,this.page);
  }
  gotoconfigInfo(){
    this.navCtrl.push(UserconfigurePage,this.page);
  }
  gotoRelease(){
    this.navCtrl.push(ReleasePage,this.page);
  }
  gotoLogin(){
    this.navCtrl.push(LoginPage,this.page);
  }
  ionViewDidLoad() {
    //var storage = localStorage.getItem('users')
    //this.page.
      if(!this.userService.checkLogin()){
        this.navCtrl.push(LoginPage);
    }


    this.page.username = localStorage.getItem('username') || '点击登录';
    this.page.ptho = localStorage.getItem('phone') || '点击注册';
    this.page.email = localStorage.getItem('email')
    //this.navCtrl.push(localStorage)

    //console.log('ionViewDidLoad UserPage');
  }
  ionViewCanEnter(){
    this.page.username = localStorage.getItem('username') || '点击登录';
    this.page.ptho = localStorage.getItem('phone') || '点击注册';
    this.page.email = localStorage.getItem('email')
  }

}
