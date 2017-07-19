import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsPage } from './news';
import { ChatPage } from './chat/chat';
import { FriendPage } from './friend/friend';

@NgModule({
  declarations: [
    NewsPage,
    ChatPage,
    FriendPage
  ],
  imports: [
    IonicPageModule.forChild(NewsPage),
  ],
  entryComponents:[ChatPage,FriendPage],
  exports: [
    NewsPage
  ]
})
export class NewsPageModule {}
