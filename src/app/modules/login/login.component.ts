import { Component, OnInit } from '@angular/core';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  value!: string;
  logo = properties.logo;
  constructor() {}

  ngOnInit(): void {
    
  }

  login() {
    
  }
}
