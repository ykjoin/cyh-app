import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-friend',
  templateUrl: 'friend.html',
})
export class FriendPage {
  itss:any={}
  data:any={
    icons:'dynamic'
  }
  newsList=[{
    userpic:'assets/images/uPic.png',
    username:'小毛',
    pubtime:'2017-10-12   13:14',
    cartype:'奥迪',
    color:'黄色',
    photos:["assets/images/list-01.png","assets/images/list-02.png","assets/images/list-03.png"],
    good:10,
    isGood:true,
    yy:'今天真开心',
    say:20
  },{
    userpic:'assets/images/uPic.png',
    username:'小毛',
    pubtime:'2017-10-12   13:14',
    cartype:'奥迪',
    color:'黄色',
    video:["assets/images/list-01.png"],
    good:10,
    isGood:true,
    yy:'今天真开心',
    say:20
  },{
    userpic:'assets/images/uPic.png',
    username:'小毛',
    pubtime:'2017-10-12   13:14',
    cartype:'奥迪',
    color:'黄色',
    video:["assets/images/list-01.png"],
    good:10,
    isGood:true,
    yy:'今天真开心',
    say:20
  },{
    userpic:'assets/images/uPic.png',
    username:'小毛',
    pubtime:'2017-10-12   13:14',
    cartype:'奥迪',
    color:'黄色',
    photos:["assets/images/list-01.png","assets/images/list-02.png","assets/images/list-03.png"],
    good:10,
    isGood:true,
    yy:'今天真开心',
    say:20
  }];
  
  goodAdd(obj){
    if(this.newsList[obj].isGood){
      this.newsList[obj].good++;
      this.newsList[obj].isGood=false;
    }else{
      this.newsList[obj].good--;
      this.newsList[obj].isGood=true;
    }
  }
  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams) {
    this.itss = this.navParams.data;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendPage');
  }

}
