import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { properties } from 'src/assets/properties/properties';
import { ApiService } from '../../services/api.service';
import { ConstantUri } from 'src/app/utils/contantUri';


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
    private readonly ApiService: ApiService<any>
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
        this.formLogin.controls[key].markAsDirty();
      }
      return;
    }

    const { username, password } = this.formLogin.value;

    const body = {
      username,
      password,
      request_toquen: sessionStorage.getItem('request_toquen')
    }

    const configPost = { url: ConstantUri.validateWithLogin, params: { api_key: ConstantUri.apikey }, body };
    this.ApiService.postService(configPost).subscribe(val => {
      const { request_token } = val;
      sessionStorage.setItem('request_toquen', request_token);
    });

    console.log(this.formLogin.value);
  }
}
