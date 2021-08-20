import * as moment from 'moment';


export function startDate(date: Date){
    let offset = date.getTimezoneOffset()      
    date.setMinutes( date.getMinutes() - offset ) 
    return date
}

export function endDate(date: Date){
    let offset = date.getTimezoneOffset()      
    date.setMinutes( date.getMinutes() - offset ) 
    let endDate = moment(date).add(1,'days').subtract(1,'seconds').toDate()

    return endDate
}