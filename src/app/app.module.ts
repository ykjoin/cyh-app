import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { MessagePageModule } from '../pages/message/message.module';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { UserPageModule } from '../pages/user/user.module';
import { pageNewDetail } from '../pages/home/newDetail/newDetail';
import { NewsPageModule } from '../pages/news/news.module';
import { UserService } from '../pages/UserService';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    //UserPageModule,
    pageNewDetail
  ],
  imports: [
    BrowserModule,
    UserPageModule,
    NewsPageModule,
    MessagePageModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:"返回",
      mode:"ios",
      tabsHideOnSubPages:true,
      swipeBackEnabled:true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    pageNewDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
