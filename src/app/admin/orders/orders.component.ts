import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { startDate } from 'src/app/shared/helper/momentCreator';
import { createPdf } from 'src/app/shared/helper/pdfCreator';
import { orderSummeryRequest } from 'src/app/shared/models/order.models';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrdersService, private location: Location) { }

  ngOnInit(): void {
  }

  back(){
    this.location.back()
  }

  getOrderSummery(){
      let payload = new orderSummeryRequest()
      let headerList = ['id','assignedToName','productName','quantity','price','custName','customerAddress']
      payload.toBeDeliveredOnFrom = startDate(new Date()).toISOString()
      payload.toBeDeliveredOnTo = startDate(new Date()).toISOString()
      this.orderService.getOrderSummery(payload).subscribe(res=>{
        if(res){
        createPdf(`Todays orders`,res['data'],headerList)  
        this.createProductListSummery(res['data'])
        }
    })
  }

  createProductListSummery(list){
    let obj={}
    let headerList = ['Product',"Quantity"]
    list.forEach(element => {
        if(!obj[element.productName]){
          obj[element.productName] = Number(element.quantity)
        }else{
          obj[element.productName] += Number(element.quantity)
        }
    });

    let arr = Object.keys(obj).map(key=> ({'Product':key, "Quantity":obj[key]}))
    createPdf(`Consolidated Orders`,arr,headerList)  
  }


}
