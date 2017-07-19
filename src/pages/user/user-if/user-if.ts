import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
//import { LoginPage } from '../login/login';
/**
 * Generated class for the UserIfPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-user-if',
  templateUrl: 'user-if.html',
})
export class UserIfPage {
  its={};
  constructor(public navControll:NavController,public alertCtrl:AlertController,public navParams:NavParams){
      this.its = this.navParams.data;
    }
  yk:any={
    portrait:'头像',
    Name:'昵称',
    Gender:'性别',
    birth:'出生年月',
    Account:'账号/手机号',
    password:'登录密码',
    Alipay:'支付宝认证',
    WeChat:'微信认证',
    woqu:'去认证',
    nb:0,
    bn:'1992-09-32'
  }
  ionViewDidLoad() {
    
  }
  // toto(){
  //   console.log(this.yk.nb)
  // }

  public(til,nams, user){
      let prompt = this.alertCtrl.create({
      title: til,
      message: "",
      inputs: [
        {
          name: 'username',
          placeholder:nams
        },
      ],
      buttons: [
        {
          text: '返回',
          handler: data => {
            //console.log(data);
          }
        },
        {
          text: '保存',
          handler: data => {
            if(user==1){
              this.navParams.data.userName=data.username;
            }else if(user==2){
              this.navParams.data.ptho=data.username;
            }else if(user==3){
              this.navParams.data.password=data.username;
            }
          }
        }
      ]
    });
    prompt.present();
  }
  edit(i){
    if(i==0){
      this.public("修改昵称","请输入昵称",1)
    }else if(i==1){
      this.public("修改电话","请输入电话",2)
    }else if(i==2){
      this.public("修改密码","请输入密码",3)
    }
  }
  
}
