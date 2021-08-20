export interface dashboardSummaryResponse{
    data: {
        orderUpcomingCount: number
        orderDeliveredCount: number
        orderCancelCount: number  
        todaysSaleSum: number
        yesterdaysSaleSum: number
        thisWeekSaleSum: number
    }
    status: boolean
    message: string
  }