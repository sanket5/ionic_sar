import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loginResponse } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { InternalService } from 'src/app/shared/services/internal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private internalService: InternalService, private authService: AuthService,
    private router: Router
    ) { 
    this.internalService.userReceiver.subscribe(res=>{
      this.loggedUser = res      
    })
    internalService.showNavReceiver.subscribe(res=>{
      res && this.toggleNabvbar(res)
    })

    this.allowNavigation = this.validateLoggedUser()
  }
  
  screenWidth: number;
  navIsOpen: boolean
  loggedUser: loginResponse
  allowNavigation: boolean
  ngOnInit(): void {
    this.screenWidth = window.innerWidth
    this.screenWidth > 756 ? this.navIsOpen = true: this.navIsOpen = false
    this.validateLoggedUser()
  }
  

  toggleNabvbar(filter?){
    if (filter){
      filter==='show'?this.navIsOpen = true: this.navIsOpen = false
      return this.navIsOpen
    }
    this.navIsOpen = !this.navIsOpen 
    return this.navIsOpen
  }

  toggleNabvbarForMobile(){
    if ( this.screenWidth <480 ){
      this.navIsOpen = !this.navIsOpen 
      return this.navIsOpen  
    }
  }

  logOut(){
    this.authService.logOut()
    this.router.navigate(['/auth/login'])
  }

  validateLoggedUser(){    
    if(this.authService.validateUserLogin()){
      this.loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
      return true
    }
    this.router.navigate(['/auth/login'])
    return false
  }

}
