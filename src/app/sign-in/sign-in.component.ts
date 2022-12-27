import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { User } from '../models/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginForm!: FormGroup;
  user!: User;
  error: String = '';

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get userName(){
    return this.loginForm.get('user')
  }

  get password() {
    return this.loginForm.get('password')
  }

  auth(): void {
    if (!this.loginForm.valid) {
      this.error = "Il y a des champs vides";
    }
    this.httpClient
    .post<User>('https://dummyjson.com/auth/login', this.loginForm.value)
    .subscribe(user => {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      window.location.reload();
    }, (err) => {
      this.error = err.message;
    })
  }

  login() {
    console.log("trying to login");
  }

  validateLogin(EventEmitter:string) {
    console.log(EventEmitter);

  }


}
