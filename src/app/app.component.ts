import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ConstantUri } from './utils/contantUri';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private ApiService: ApiService<any>
  ){
    const getConfig = { url: ConstantUri.tokenNew, params: {api_key: ConstantUri.apikey} };
    ConstantUri.tokenNew;
    this.ApiService.getService(getConfig).subscribe(val => {
      const { request_token } = val;
      sessionStorage.setItem('requestToken', request_token);
    });
  }
  title = 'movies';
}
