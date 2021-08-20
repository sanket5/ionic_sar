import { Component, OnInit } from '@angular/core';
import { appError } from 'src/app/constants/dto/extrasModels';
import { InternalService } from 'src/app/service/internal.service';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {
  error: appError
  constructor(private internalService:InternalService) { }

  ngOnInit(): void {
    this.internalService.errorReceiver.subscribe(error=>{
      this.error = error
    })
  }

}
