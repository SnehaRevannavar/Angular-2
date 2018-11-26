import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from '../auth/auth.service';
import { CookieService } from '../../../node_modules/ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient, private _authService : AuthService, private _cookie: CookieService) { }

  getProducts(){
    return this._http.get('http://localhost:3000/getproducts',{
      headers:new HttpHeaders().set('authorization',this._cookie.get('token'))
    });
  }
}
