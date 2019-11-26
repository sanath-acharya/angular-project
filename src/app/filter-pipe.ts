import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name:'searchByfields'
})
export class FilterPipe implements PipeTransform{
    // transform(items:any,filter:any,defaultFilter:boolean):any {

       
    // }

    transform(value:string,gender:string):string{
        if(gender.toLowerCase()=='male'){
            return "mr."+value;
        }else{
            return "miss"+value;
        }
        
    }

}
