import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { InternalService } from 'src/app/shared/services/internal.service';
import { MobNumberValidator } from 'src/app/shared/validators/mobile-number.validator';
import { Md5 } from 'md5-typescript'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


  loginError:boolean = false
  hide: boolean = true
  constructor( private fb : FormBuilder, private authService: AuthService,
    private router: Router, private internalService: InternalService
    ) { }

  ngOnInit(): void {
    this.createForm()
  }

  loginControls(){    
    return this.loginForm.controls
  }
  loginForm: FormGroup

  createForm(){
    this.loginForm = this.fb.group({
      mobileNo :['',  [ Validators.required, MobNumberValidator() ] ],
      password: ['',Validators.required]
    })

  }

  login(){
    this.loginForm.value.password = Md5.init(this.loginForm.value.password)           
    this.authService.checkLogin(this.loginForm.value).subscribe(res=>{
      if (res.status == true){
        localStorage.setItem('loggedUser', JSON.stringify(res))
        localStorage.setItem('auth', JSON.stringify(res['token']))

        this.internalService.emitUser(res)
        if (res.type=='ADM'){
          this.router.navigate(['v2/home/ad']);
        }else{
          this.router.navigate(['v2/home/cu']);
        }

      }
      else{
        this.loginError = true
        this.loginForm.reset()
      }
      
    })
    
    
  }


}
