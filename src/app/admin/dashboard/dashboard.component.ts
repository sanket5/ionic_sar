import { Component, OnInit } from '@angular/core';
import { dashboardSummaryResponse } from 'src/app/shared/interface/dashboard.interface';
import { Order, OrderRequest } from 'src/app/shared/interface/order.interface';
import { DashboardService } from 'src/app/shared/services/dashboard.service';
import { OrdersService } from 'src/app/shared/services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  dashboardSummary: dashboardSummaryResponse
  upcomingOrderList:Order[]

  

  constructor(private dashboardService: DashboardService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.fetchDashboardSummary()
    this.fetchUpcomingOrders()

  }

  ngAfterViewChecked(){
    this.applyColorToSummaryCards()
  }
  

  fetchDashboardSummary(){
    this.dashboardService.fetchDashboardSummery()
    .subscribe( dSummery=>{
      this.dashboardSummary = dSummery
      
    })
  }

  applyColorToSummaryCards(){
    let colorsList = [ '#D8F1FF', '#F9F0FF','#FFE1DE', '#E0FFF1']
    var htmlElementList = document.getElementsByClassName('summary_card')
    for (let i=0; i< htmlElementList.length; i++){
      let colorIndex =  i<= 3 ? i : i%3
      var colorProperty = "background-color:"+ colorsList[colorIndex]
      htmlElementList[i].setAttribute("style",colorProperty)
    }
  }

  fetchUpcomingOrders(){
    let payload = new OrderRequest()
    payload.status = 'Upcoming'
    payload.toBeDeliveredOnFrom = new Date().toISOString()

    this.orderService.fetchOrders(payload).subscribe((orders)=>{
      this.upcomingOrderList = orders.orders
    })
  }


}
