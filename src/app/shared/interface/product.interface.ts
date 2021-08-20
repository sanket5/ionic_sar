



export interface products{
    id: Number,
    name: string,
    shortName: string,
    productSubCategoryID: Number,
    price: number,
    status: 'InStock' | 'RunningLow' |'Discontinued' | 'InStock'  | 'OutOfStock' | 'Removed',
    createdOn: string,
    imgUrl: string
}

export interface productResponse{
    
        products: [products],
        status: boolean,
        message: string
      
}

export interface productCategoryListResponse{
        subCats: productSubCategory[]
        status: boolean
        message: string
}

export interface productSubCategory{
        id: number
        name: string
}
