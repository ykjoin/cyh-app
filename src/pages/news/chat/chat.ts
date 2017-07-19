import { Component,ElementRef,ViewChild } from '@angular/core';
import { AlertController, NavController, NavParams,Content } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild('editor') editorEl:ElementRef;
  @ViewChild('slides') slides:ElementRef;
  @ViewChild('right') rights:ElementRef;
  @ViewChild('left') lefts:ElementRef;
  @ViewChild('Content') content:Content;
  messList = this.getmess();
  its:any={}
  constructor(public navCtrl: NavController,public alertCtrl:AlertController, public navParams: NavParams) {
    this.its = this.navParams.data;
  }
  itss:any={
    tr:true,
    ts:false
  }
  //ionViewDidLoad
  ionViewDidLoad() {
    // 在元素被渲染成dom之前。把高度设置44
    // 这样ionic 就不会在页面上留一块区域出来
    let footer =  this.slides.nativeElement;
        footer.style.height = '44px';
  }
  // 加载完成了 dom 已经被渲染好了
  ionViewWillEnter(){
    // 在我即将进入页面的时候  把高度改回去
    let footer =  this.slides.nativeElement;
        footer.style.height = 'auto';
  }


openFace(){
    this.itss.ts=true;
    let footer =  this.slides.nativeElement;
    footer.style.transform='translateY(0)';
    footer.style.transition="transform 300ms linear";
    this.content.resize();
    // 打开表情的时候，让内容区域滚动到底部   content.resize() 是异步处理，所以用一个setTimeOut,等他执行完成之后，在执行。
      let self = this;
    setTimeout(function(){
      self.content.scrollToBottom(300);//300 时间。与动画时间一致
    },20)

  }
  close(){
    if(this.itss.ts){
      let footer =  this.slides.nativeElement;
      footer.style.transform='translateY(214px)';
      footer.style.transition="transform 100ms linear";
      //  新增
      footer.style.height = '44px';
      this.content.resize();
      setTimeout(function(){
        footer.style.height = 'auto';
      },20)
      this.itss.ts=false;
    }
      

     
  }
  inputText(){
    let value = this.editorEl.nativeElement.innerHTML;
    if(value.length>0){
      this.itss.tr=false;
    }else{
      this.itss.tr=true;
    }
  }
  sendmsj(){
    let value = this.editorEl.nativeElement.innerHTML;
    let msg = {type:"my",name:"jiek",conten:value};
        this.messList.push(msg)
        this.editorEl.nativeElement.innerHTML="";
          this.itss.tr=true;
  }
getmess(){
  return[
    {type:"other",name:"笑话",conten:'今天中午吃什么今天中午吃什么今天中午吃什么今天中午吃什么今天中午吃什么今天中午吃什么今天中午吃什么'},
    {type:"my",name:"join",conten:'今天中午吃什么今天中午吃什么今天中午吃什么今天中午吃什么今天中午吃什么今天中午吃什么'},
    {type:"other",name:"jiek",conten:'今天中午吃什么'},
    {type:"other",name:"jiek",conten:'今天中午吃什么'},
    {type:"other",name:"jiek",conten:'今天中午吃什么'},
    {type:"other",name:"jiek",conten:'今天中午吃什么'},
    {type:"other",name:"jiek",conten:'今天中午吃什么'},
    {type:"other",name:"jiek",conten:'今天中午吃什么'},
    {type:"other",name:"jiek",conten:'今天中午吃什么'},
    {type:"my",name:"oidh",conten:'今天中午吃什么'}
  ]
}

  faces = this.getFace();
  index=0;
  inputFaces(e){
    //e.target;
    let tag =e.target.cloneNode(true)
    let editor = this.editorEl.nativeElement;
        editor.appendChild(tag)
    let value = this.editorEl.nativeElement.innerHTML;
        if(value.length>0){
          this.itss.tr=false;
        }else{
          this.itss.tr=true;
        }
  }
  getFace(){
    var arr=[];
    var arr2=[];
    var arr3=[];
    var row=0;
    var col=0;
    var str='';
    for(var i=1;i<142;i++){
      row++;
      
      if(i<10){
         str = "assets/Face/00"+i+"@2x.png";
      }else if(i>9&&i<100){
         str = "assets/Face/0"+i+"@2x.png";
      }else{
         str = "assets/Face/"+i+"@2x.png";
      }
      arr.push(str)
      if(row==8){
        col++;
        arr2.push(arr);
        row=0;
        arr=[];
      }
      if(col==4){
        arr3.push(arr2);
        arr2=[];
        col=0;
      }
      
    }
    //console.log(arr3)
    return arr3;
  }
}
