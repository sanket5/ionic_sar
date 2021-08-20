import { Component, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable} from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { InternalService } from 'src/app/shared/services/internal.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input () displayedColumns: string[]
  @Input() list:[]=[]
  @Input() routePath;
  @Input() functionType: 'product'| 'orderItem'|'user'
  @Input() showFilters: boolean = true
  @Input() filterList:[]
  @Input() dateFilter:boolean = true
  @Input() highlightColor;
  @Input() highlightCondition;
  @Input() conditionObject;
  @Output () filterFunction = new EventEmitter()

  page: number = 1
  // itemsPerPage: number = 5
  itemsPerPage: number = 10

  lastPageNumber: number;
  filterObj= {}
  isEmpty:boolean= false
  showPaginator: boolean= false




  // displayedColumns: string[] = ['name', 'productSubCategoryID','price', 'status','actions'];
  // productList: products[]
  showList :any[] =[]
  searchKey;
  sortTracker:{} = {}
  filterObject:{} =[]
  cellHighlightColor='transparent'

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });


  constructor(private internalService: InternalService, private router: Router,
    ) {


     }

  ngOnInit(): void {
    document.documentElement.style.setProperty('--highlightColor', this.highlightColor)
  }
  ngOnChanges(){
    this.showList = this.list  
    if (this.showList){
      if(this.showList.length>0){
        this.isEmpty= false
        this.showList = this.paginateProduct(this.list, this.page)
      }else{
        this.isEmpty= true
        this.showPaginator = false

      }
    }else{
      this.isEmpty=true
      this.showPaginator = false

    }
    document.documentElement.style.setProperty('--highlightColor', this.highlightColor)    
  }

  filterProduct(){

    if ( Number.isInteger( Number(this.filterObject['id']) ) ){
      this.filterObject['id'] = Number( this.filterObject['id'])
    }else{
      delete this.filterObject['id']
    }
    if (this.range.value.start!= null &&  this.range.value.end!= null){
      this.filterObject['from'] = this.range.value.start.toISOString()
     this.filterObject['to'] = this.range.value.end.toISOString()
    }
    this.filterFunction.emit(this.filterObject)
    
  }

  resetFilter(){
    this.filterObject={}
    this.filterFunction.emit(this.filterObject)
  }

  selectRow(item){
      if (this.functionType == 'orderItem'){        
        this.internalService.emitItemData(item)
        this.router.navigate(['v2/home/ad/orders/details'])
      }
      else if(this.functionType == 'user' || this.functionType=='product' || this.functionType=='test'){        
        this.router.navigate([this.routePath+item.id])
      }
  }

  sort(sortKey){
    if(this.sortTracker[sortKey] == true ){
      this.showList= this.showList.sort((a,b)=> a[sortKey]>b[sortKey]? 1 :-1 )
      this.sortTracker[sortKey] = false      
    }
    else{
      this.showList=  this.showList.sort((a,b)=> a[sortKey]<b[sortKey]? 1 :-1 )
      this.sortTracker[sortKey] = true
    }
    this.table.renderRows()
  }

  paginateProduct(productList, page){
    let arr: any[] = []
    if (productList.length % this.itemsPerPage == 0){
      this.lastPageNumber = Math.floor(productList.length/ this.itemsPerPage)
    } 
    else{
      this.lastPageNumber = Math.floor(productList.length/ this.itemsPerPage)+1
    }

   for ( let i=0; i< productList.length; i++){
    if (i< page*this.itemsPerPage && i>=(page-1)*this.itemsPerPage ){      
      arr.push(productList[i])
    }
   }
   this.showPaginator = this.lastPageNumber>1 ? true : false
   return arr
  } 

  nextPage(){    
    if ( this.lastPageNumber > this.page ){ 
      this.page+=1
      this.showList = this.paginateProduct(this.list, this.page)
      document.getElementById("pre").removeAttribute("disabled")

    }
    if (this.page >= this.lastPageNumber){
      document.getElementById("next").setAttribute('disabled', "disabled")
    }
    
  }

  prePage(){
    if ( this.page >1 ){
      this.page-=1
      this.showList = this.paginateProduct(this.list, this.page)
      document.getElementById("next").removeAttribute('disabled')
    }
    if (this.page <= 1 ){
      document.getElementById("pre").setAttribute('disabled', "disabled")
    }
  }

  jumpToPage(){
    if (this.page >= 1 && this.page<= this.lastPageNumber){
      this.showList = this.paginateProduct(this.list, this.page)
    }
  }

  // from Global Configurations


  log(a){
    
  }

  verifyHighlightCondition(row) {    
    if(this.highlightCondition){      
      if (this.highlightCondition.match(/==/)){
        let conditionArr = this.highlightCondition.split('==')
          if (conditionArr[1] == 'date'){
            let today = new Date()
            let datePrior = new Date(row[conditionArr[0]])
            let diff = ( today.getTime() - datePrior.getTime() ) / (1000*3600*24)
            if ( diff > Number(conditionArr[2])  ){
              return true
            }
            return false
          }
          else{
            if (row[conditionArr[0]]== null){
              return true
            }
            return false
          }
      }
      return false
    }
    return false

  }

  validateHighlight(columnValue,columnName?){    
    if(this.conditionObject){
      if(this.conditionObject.applicableTo == 'cell'){
        if(columnName){      
          if(columnName === this.conditionObject.cell && columnName != ''){
            if(columnValue[this.conditionObject.conditionOnValue]== this.conditionObject.value){          
              return 'case1'
            }else if(this.conditionObject.ifFalse){
              return 'case2'
            }
          }
          return false
      }
      }
      else{
        if(this.conditionObject.type == 'date'){
          let today = new Date()
            let datePrior = new Date(columnValue[this.conditionObject.conditionOnValue])
            let diff = ( today.getTime() - datePrior.getTime() ) / (1000*3600*24)            
            if ( diff > Number(this.conditionObject.value)){
              return true
            }
            return false
        }else{          
            if(columnValue[this.conditionObject.conditionOnValue] != this.conditionObject.value){
              return true
            }
            return false
        }
      }
    }
    return false
  }



}
