import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-carinfo',
  templateUrl: 'carinfo.html',
})
export class CarinfoPage {
		its:any={}
  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams) {
  	this.its = this.navParams.data;
  }
  data={
  	zhen:false,
    jia:true,
    brand:["宝马"],
    Models:["X5 USV"],
    seat:["5座","4座","2座","6座"],
    background:["黑色","红色","白色","蓝色","黄色","彩色"],
    mileage:["1500","3000","1000","2000"]
  }
  
  addtogo(i){
  	if(i==1){
  		this.data.zhen=true;
  		this.data.jia=false;
  	}else if(i==2){
  		alert("添加成功")
		this.navParams.data.jia=false;
		this.navParams.data.zhen=true;
  	}
  	
  }
  ionViewDidLoad() {
    this.data.zhen=this.navParams.data.zhen;
  	this.data.jia=this.navParams.data.jia;
  }

}
