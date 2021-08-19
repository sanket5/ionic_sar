import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { loginResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiUrl = environment.api_base_url

  checkLogin(userCredentials){
    return this.http.post<loginResponse>(this.apiUrl+'Login/CheckLogin', userCredentials)
  }

  getUserType(){
      let user:loginResponse  = JSON.parse(localStorage.getItem('loggedUser'))
      return user.type
  }

  isLoggedIn(){
    if(localStorage.getItem('auth') && localStorage.getItem('loggedUser')){
      return true
    }
    return false
  }

  logOut(){
    localStorage.removeItem('loggedUser')
  }

  getUserLoggedInId(){
    let user:loginResponse  = JSON.parse(localStorage.getItem('loggedUser'))
      return user.userId
  }
  validateUserLogin(){
    if(this.isLoggedIn()){
      let now = new Date()
      let expiryDate = new Date(JSON.parse(localStorage.getItem('loggedUser')).expiration)
      if (now> expiryDate){
        return false
      } 
      return true
    }
    return false
  }

  sendOtp(payload){
    return this.http.post(this.apiUrl+'Login/Reset', payload)
  }

  validateOtp(payload){
    return this.http.post(this.apiUrl+'Login/VerifyOTPNewPass', payload)
  }

  newPassword(payload){
    return this.http.post(this.apiUrl+'Login/CreateNewPass', payload)
  }


}
