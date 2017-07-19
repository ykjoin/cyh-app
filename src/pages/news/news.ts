import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from './chat/chat';
import { FriendPage } from './friend/friend';

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  data:any={
    icons:'bookmark',
    Friend:[
      {upick:'assets/images/uPic.png',uname:'小明',utime:"2017:09:20:13:23",uspeak:"啦啦啦啦绿绿绿绿",ufo:'',uId:1},
      {upick:'assets/images/uPic.png',uname:'毛太',utime:"2017:09:20:13:23",uspeak:"啦啦啦啦绿绿绿绿",ufo:'',uId:2},
      {upick:'assets/images/uPic.png',uname:'牛逼',utime:"2017:09:20:13:23",uspeak:"啦啦啦啦绿绿绿绿",ufo:'1',uId:3},
      {upick:'assets/images/uPic.png',uname:'大明',utime:"2017:09:20:13:23",uspeak:"啦啦啦啦绿绿绿绿",ufo:'',uId:4},
      {upick:'assets/images/uPic.png',uname:'舒丹',utime:"2017:09:20:13:23",uspeak:"啦啦啦啦绿绿绿绿",ufo:'2',uId:5},
      {upick:'assets/images/uPic.png',uname:'斯柯',utime:"2017:09:20:13:23",uspeak:"啦啦啦啦绿绿绿绿",ufo:'',uId:6},
    ]
  }
  togo(i){
    this.navCtrl.push(FriendPage,i);
  }
  goto(i){
    this.navCtrl.push(ChatPage,i);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }

}
