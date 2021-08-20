import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from "rxjs/operators";
import {MatDialog} from '@angular/material/dialog';
import { LoaderComponent } from '../micro/loader/loader.component';



@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.showLoader()
    return next.handle(request).pipe(
      finalize(() => this.hideLoader() )
      );
  }
  

  private showLoader(): void {
    this.OpenDialog()
    
  }
  private hideLoader(): void {
    this.closeDialog()
  }

  OpenDialog(){
    this.dialog.open(LoaderComponent , {disableClose: true
      ,hasBackdrop: true
    });
  }

  closeDialog(){
    this.dialog.closeAll()
  }

}
