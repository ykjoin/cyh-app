import { Component } from '@angular/core';

import { NewsPage } from '../news/news';
import { MessagePage } from '../message/message';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  home = HomePage;
  news = NewsPage;
  message = MessagePage;
  user = UserPage;

  constructor() {

  }
}
