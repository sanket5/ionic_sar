import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrderResponse } from '../interface/order.interface';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  apiUrl = environment.api_base_url
  constructor(private http: HttpClient) { }

    fetchOrders(payload){
      return this.http.post<OrderResponse>(this.apiUrl+'Order/FetchOrders', payload)
    }

    processOrder(payload){
      return this.http.post(this.apiUrl+'Order/ProcessOrders', payload)
    }

    createMannualOrders(payload){
      return this.http.post(this.apiUrl+'Order/AddUpdateCustomerManualOrders', payload)
    }
    
    getOrderSummery(payload){
      return this.http.post(this.apiUrl+"Order/OrderOutFull", payload)
    }
}
