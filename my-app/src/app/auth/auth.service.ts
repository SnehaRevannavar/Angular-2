import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from'rxjs';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { longStackSupport } from '../../../node_modules/@types/q';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $authCheck = new Subject<any>();

  constructor(private _router:Router, private _http:HttpClient, private _cookieService : CookieService) { }

  login(credentials){
   this._http.post('http://localhost:3000/authenticate/',credentials)
    .subscribe((resp:any)=>{
      if(resp.isLoggedIn){
        this.$authCheck.next(true);
        this._cookieService.set('token',resp.token);
        this._router.navigate(['/home']);
      }else{
        alert('Wrong Credentials');
      }
    });}
    // if(credentials.username=="admin" && credentials.password=="admin"){
    //   this.$authCheck.next(true);
    //   this._router.navigate(['/home']);
    // }else{
    //   alert('Wrong Credentials!!');
    // }
    
    checkLogin(){
      return this._cookieService.check('token');
    }
    
    logout(){
      this._cookieService.delete('token');
      this.$authCheck.next(false);
      this._router.navigate(['/login']);
    }
  }

