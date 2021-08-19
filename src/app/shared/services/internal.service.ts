import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Subject } from 'rxjs';
import { loginResponse } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  
  private userType = new Subject<loginResponse>();
  public userReceiver = this.userType.asObservable()
  // private itemsData = new BehaviorSubject<Order>(null)
  // public itemsDataReceiver = this.itemsData.asObservable()
  private showNav = new Subject<string>()
  public showNavReceiver = this.showNav.asObservable()
  private error = new Subject<any>()
  public errorReceiver = this.error.asObservable()

  constructor(private snackbar: MatSnackBar) { }


  emitUser(uType){
    this.userType.next(uType)
  }

  // emitItemData(data){
  //   this.itemsData.next(data)
  // }
  emitError(error){
    this.error.next(error)
  }

  showSnackBar(message, action, duration){    
    this.snackbar.open( message, action, {
      duration: duration,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass:['snackBar']
    } )
  }

  toggleNavBar(action){
    this.showNav.next(action)
  }




}
