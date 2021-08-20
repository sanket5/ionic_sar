import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  filterObject:{}=[]
  @Input() filterInputList:any
  @Input() dateFrom;
  @Input() dateTo
  @Output () filterFunction:any = new EventEmitter()
  @Output () pdf:any = new EventEmitter()

  IsError:boolean =false


  range = new FormGroup({
    start: new FormControl([Validators.required]),
    end: new FormControl([Validators.required])
  });

  constructor() { }

  ngOnInit(): void {
    let patchObj = {
      start: this.dateFrom,
      end: this.dateTo
    }
      this.range.patchValue(patchObj)
  }

  resetFilter(){
    this.range.reset()
    this.filterObject={}
    // this.filterFunction.emit(this.filterObject)
  }

  filter(){    
    if(this.range.valid){
      if (this.range.value.start){        
        let offset = this.range.value.start.getTimezoneOffset()
        let start: Date = this.range.value.start        
        let end: Date = this.range.value.end        
        start.setMinutes( start.getMinutes() - offset ) 
          end.setMinutes( end.getMinutes() - offset ) 
        let endDate = moment(end).add(1,'days').subtract(1,'seconds')
        this.filterObject['start'] = moment(start).toISOString()
        this.filterObject['end'] = endDate.toISOString()
      }
    }else{
      this.range.markAsDirty();
      this.range.markAsTouched();
      this.range.setErrors({ 'invalid': true });
    }
    this.filterFunction.emit(this.filterObject)
  }

  downloadPdf(){
    this.pdf.emit(true)
  }



}
