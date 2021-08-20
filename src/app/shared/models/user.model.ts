export interface loginResponse{
    message: String
    name: String
    status: Boolean
    type: "ADM" | "EMP" | "CUS"
    userId: number
}

export interface userRequest{
        id: number,
        fullNameLike: string,
        mobileNo: string,
        email: string,
        empType: 'E'|'C'|'D',
        cityID: number
}

export class employeeRequest{
    id: number
    fullNameLike: string
    mobileNo: string
    email: string
    empType:'D'
    cityID: string
}

export class employeeListResponse{
    employees: [employeeData]
    status: boolean
    message: string
}

export class employeeData{
    id: number
    fullName: string
}

export class customerRequest{
    id: number
    fullNameLike: string
    mobileNo: string
    email: string
    empType: string
    cityID: number
}

export class customerListResponse{
    customers: [customerData]
    status: boolean
    message: string
}

export class customerData{
    id: number
    fullName: string
    mobileNo:string
}


export class userFetchRequest{
    id: number
    fullNameLike: string
    mobileNo: string
    email: string
    empType: string
    cityID: number
}

export class customerAddressResponse{
    data: [customerAddressData]
    status: boolean
    message: string
}

export class customerAddressData{
    id:number
    custID: number
    latitude: number
    logitude: number
    line1: string
    line2:string
    landmark: string
    isDefault: boolean
    cityID: number
    city: string
    fullAddress: string
}       

export class addressMappingRequest{
    empID: number
    custAddressID: number
    sequence: number
    assignedBy:number
    isDefaultMapping: boolean
}