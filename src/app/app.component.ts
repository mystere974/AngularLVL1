import { Component } from '@angular/core';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularProjectSimplon';
  isConnected: boolean = false;

  user!: User;

  constructor() {
    this.isConnected = (localStorage.getItem('user') !== null)
  }
}
