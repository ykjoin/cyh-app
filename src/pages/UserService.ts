import { Injectable } from '@angular/core';
import axios from 'axios'
const httpUrl = 'http://localhost:3000/'
@Injectable()
export class UserService {
  checkLogin(){
      let login = localStorage.getItem('loginState');
      if(login){
        return false;
      }else{
        return true;
      }
  }
  post(action,data){
     return axios.post(httpUrl+action,data)
  }
}