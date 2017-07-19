import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-newDetail',
  templateUrl: 'newDetail.html'
})
export class pageNewDetail{
  its;
    constructor(public navControll:NavController,public navParams:NavParams){
      this.its = this.navParams.data
    }
    goodAdd(){
    if(this.its.isGood){
      this.its.good++;
      this.its.isGood=false;
    }else{
      this.its.good--;
      this.its.isGood=true;
    }
  }
}