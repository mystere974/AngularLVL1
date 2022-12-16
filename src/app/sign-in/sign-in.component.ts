import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  login() {
    console.log("trying to login");
  }

  validateLogin(EventEmitter:string) {
    console.log(EventEmitter);

  }
}
