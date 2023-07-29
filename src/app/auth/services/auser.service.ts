import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable,BehaviorSubject } from 'rxjs';
import { Environment } from 'src/app/environment';
import { RegisterForm } from 'src/app/auth/register-form';
import { LoginForm } from '../login-form';
import jwtDecode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuserService {

  constructor(private _http:HttpClient) {
   this. returnToken()
   }

  userToken:BehaviorSubject<any> = new BehaviorSubject(null)
  
  handleRegister(formData:RegisterForm):Observable<any>{
    return this._http.post(Environment.baseUrl + "signup" , formData)
  }

  handleLogin(formData:LoginForm):Observable<any>{
    return this._http.post(Environment.baseUrl + "signin" , formData)
  }


  returnToken():void{
  const  uToken = localStorage.getItem('token')
  if (uToken) {
    const decodetoken = jwtDecode(uToken);
    this.userToken.next(decodetoken)

  }
  
  }
}
