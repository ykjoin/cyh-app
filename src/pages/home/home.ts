import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { pageNewDetail } from './newDetail/newDetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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
  constructor(public navCtrl: NavController) {

  }
  goodAdd(obj){
    if(this.newsList[obj].isGood){
      this.newsList[obj].good++;
      this.newsList[obj].isGood=false;
    }else{
      this.newsList[obj].good--;
      this.newsList[obj].isGood=true;
    }
  }
  goto(i){
    this.navCtrl.push(pageNewDetail,this.newsList[i]);
    
  }
}
