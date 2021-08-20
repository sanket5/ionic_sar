
export class processOrderRequest{
    orderId: number
    assignedToEmpId: number
    assignedByAdmId: number
    addressPermanentAssign: boolean

}

export class orderResponse{
    message: string
    orders: []
    status: boolean
}
export class mannualOrderRequest{
        custOld_ID: number
        custNew_FullName: string
        custNew_MobileNo: string
        custNew_Email: string
        custAddressOld_CustAddressID: number
        custAddressNew_CustID: number
        custAddressNew_Latitude: string
        custAddressNew_Longitude: string
        custAddressNew_Line1: string
        custAddressNew_Line2: string
        custAddressNew_Landmark: string
        custAddressNew_IsDefault: true
        custAddressNew_CityID: number
        toBeDeliveredOnFrom: string
        toBeDeliveredOnTo: string
        productId: number
        quantity: number
        price: number
        assignedToID: number
        assignedByID: number
        scheduleType:string
        addressPermanentAssign: boolean
}

export class orderSummeryRequest{
        orderID: number
        custID: number
        custAddressID: number
        productId: number
        totalAbove: number
        toBeDeliveredOnFrom:string
        toBeDeliveredOnTo: string
        orderType: string
        status: string
        assignedToID: number
}