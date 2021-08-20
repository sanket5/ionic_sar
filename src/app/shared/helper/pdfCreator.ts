import { SfDate } from "./dateFormater";
import { isDateType } from "./dateTypeValidator";


declare let jsPDF;


export function createPdf(title, list, headerList){

    if(list.length >0 && headerList.length>0){            
        let listToPdf =[]
        list.forEach(item=>{
        const list = Object.keys(item)
        .filter(key => headerList.includes(key))
        .reduce((obj, key) => {
            if(isDateType(item[key])){
            obj[key] = SfDate(new Date(item[key]))
            }else{
            obj[key] = item[key];
            }
            return obj;
        }, {});
        listToPdf.push(list)
        })

        if(listToPdf.length>0){
            let newHeaderList = Object.keys(listToPdf[0])   
            newHeaderList.splice(0,0,'Sr.')             
            let itemList = []
            let doc = new jsPDF();
            listToPdf.forEach((item, index)=>{
            let list = Object.values(item)
            list.splice(0,0,index+1) 
            itemList.push(list)
            })

            doc.text(20, 10, title)  
            doc.text(150,10, SfDate(new Date() ) )
            doc.autoTable(newHeaderList, itemList);
            doc.output('save', `${title}-${ SfDate(new Date()) }.pdf`); 
            window.open(doc.output('bloburl'))
        }
        else{
            
        }
        }


} 