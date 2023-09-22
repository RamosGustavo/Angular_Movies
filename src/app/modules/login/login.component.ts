import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logo = properties.logo;
  formLogin: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

  login() {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched();
      for (const key in this.formLogin.controls) {
        console.log(this.formLogin);
      }
    }
  }
}
