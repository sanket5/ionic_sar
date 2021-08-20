import { SfDate } from "./dateFormater";

export function isDateType(content){
    const isoPattern = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(.[0-9]+)?(Z)?$/;    
    if(isNaN(content)){
        if(content.match(isoPattern) ){
            return true
        }
        return false
    }
    return false
}