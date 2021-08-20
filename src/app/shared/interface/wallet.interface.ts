

export interface wallteLedgerResponse{
    data:walletLedgerData[]
    message:string
    status: boolean
}

export interface walletLedgerData{
    amount: number
    createdOn: string
    currentBalance: number
    id: number
    recordType: string
    referenceNo: number
    remark: string
    transType: "CR" | "DR"
    updatedOn: string
    userID: number
    userType: "ADM" | "CUS" | "EMP"
}