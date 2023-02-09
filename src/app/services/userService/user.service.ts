import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IForgetPassword, IUserLogin, IUserRegister } from 'src/app/models/UserModel';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  login(requestData: IUserLogin) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/user/login', requestData, false, header)
  }

  registration(requestData: IUserRegister){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/user/userSignUp',requestData,false,header)
  }

  forgetPassword(requestData: IForgetPassword){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.httpService.postService('/user/reset',requestData,false,header)
  }

}
