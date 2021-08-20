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