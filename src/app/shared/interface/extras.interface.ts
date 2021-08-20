

export interface feedbackReqsonse {
        data: [feedbackData]
        status: boolean
        message: string
}


export interface feedbackData{
    id: number
    customerID:number
    category: string
    title: string
    description: string
    rating: number
    isClosed: boolean
    addedOn: string
}

export interface genericResponse{
    status: boolean
    message: string
} 

export interface testResultData{
    id: number
    testName: string
    description: string
    fontIcon: string
    imagePath: string
    fileLink:string
    fileType: string
    stackRank: string
    isActive: boolean
    applicableTo: string
    startDate: string
    endDate: string
    lastUpdated: string
}

export interface testResultResponse{
    data: [testResultData]
    status: boolean
    message: string
}

