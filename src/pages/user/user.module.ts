import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserPage } from './user';
import { UserIfPage } from './user-if/user-if';
import { CarinfoPage } from './carinfo/carinfo';
import { UserbalancePage } from './userbalance/userbalance';
import { UserconfigurePage } from './userconfigure/userconfigure';
import { ReleasePage } from './release/release';
import { LoginPage } from './login/login';
@NgModule({
  declarations: [
    UserPage,
    UserIfPage,
    CarinfoPage,
    UserbalancePage,
    UserconfigurePage,
    ReleasePage,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
  exports: [
    UserPage
  ],
  entryComponents:[
    UserIfPage,
    CarinfoPage,
    UserbalancePage,
    UserconfigurePage,
    ReleasePage,
    LoginPage
  ]
})

export class UserPageModule {
  
}
