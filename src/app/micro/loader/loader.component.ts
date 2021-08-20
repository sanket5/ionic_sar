import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  loaderVisibility: boolean = true
  constructor() { }



  ngOnInit(): void {

  }

  ngOnDestroy() {
  }

}
