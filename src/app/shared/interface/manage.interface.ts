


export interface leaveResponse {
    data: [leaveData]
    status: boolean
    message: string
}


export interface leaveData {
    id: number
    empIDPermanent: number
    empIDTemporary: number
    leaveDate: string
    reason: string
    status: string
    updatedOn: string
    empPermanentFullName:string
    empTemporaryFullName: string
}

