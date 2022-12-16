import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form! : FormGroup;

  constructor (private fb: FormBuilder){}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(10)
      ]],
      phones: this.fb.array([]),
      terms:['', [
        Validators.requiredTrue
      ]]
    },
    );

    this.addPhone();
  };

  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password')
  }

  get phones() {
    return this.form.get('phones') as FormArray;
  }

  addPhone() {
    let phone = this.fb.group({
      phonePrefix:'',
      phoneNumber: ['', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(10),
        Validators.pattern('^[0-9]*$')
      ]]
    })

    this.phones.push(phone)
  }

  getPhoneNumber(index: number) {
    return this.phones.controls[index].get('phoneNumber')
  }

  getPhonePrefix(index: number) {
    return this.phones.controls[index].get('phonePrefix')
  }

  deletePhone(index: number) {
    this.phones.removeAt(index);
  }

  submit() {
    if(!this.form.valid) {
      alert('les conditions ne sont pas remplis')
      return;
    }
    alert('success');
  }
  }


