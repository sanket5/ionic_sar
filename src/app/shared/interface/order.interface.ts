import { customerAddressData } from '../models/user.model'

export interface OrderItem {
    productId: number
    productName: string
    quantity: number
    price: number
}

export interface Order {
    id: number
    custID: number
    custName: string
    total: number
    discount: any
    netTotal: number
    status: string
    remark: string
    orderType: string
    assignedTo: any
    assignedToName: any
    assignedBy: any
    assignedByName: any
    toBeDeliveredOn: string
    deliveredOn: any
    createdOn: string
    orderItems: OrderItem[]
    lastUpdated: string
    itemsCount:number
    fullAddress: string
    customerAddress: customerAddressData
  }


  export interface OrderResponse {
    orders: Order[]
    status: boolean
    message: string
  }

  export class OrderRequest{
    orderID: number
    custID: number
    productId: number
    totalAbove: number
    toBeDeliveredOnFrom: string
    toBeDeliveredOnTo: string
    deliveredOnFrom: string
    deliveredOnTo: string
    orderType: string
    status: 'Upcoming'|'Delivered'|'Processed'
  }
  