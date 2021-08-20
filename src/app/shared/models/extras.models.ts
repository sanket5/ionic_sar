

export class feedbackRequest{
        custID: number
        category: string
        ratingsFrom: number
        ratingsTo: number
        feedbackDateFrom: string
        feedbackDateTo: string
        showClosed: boolean
}


export class testResultAddRequest{
        id: number
        testName: string
        description: string
        imagePath: string
        fontIcon: string
        fileLink: string
        fileType: string
        stackRank: number
        isActive: boolean
        applicableTo: string
        startDate: string
        endDate: string
}


export class testResultFetchRrquest{
        id: number
        fileType: string
        isActive: true
        applicableTo: string
        date: string
}

export class appError {
        status:number
        message: string
    }