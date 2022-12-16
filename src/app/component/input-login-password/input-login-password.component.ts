import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-login-password',
  templateUrl: './input-login-password.component.html',
  styleUrls: ['./input-login-password.component.scss']
})
export class InputLoginPasswordComponent implements OnInit {

  @Input() placeholder!: string;
  @Input() type: string = 'text';
  @Input() label!: string;
  @Output() value:EventEmitter<string> = new EventEmitter<string>();
  isPassword!: boolean;

  constructor() { }

  ngOnInit(): void {

  }

  togglePassword() {

  }

}
