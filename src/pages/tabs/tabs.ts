import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TasksPage } from '../tasks/tasks';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TasksPage;


  constructor() {

  }
}
