import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'format'
})
export class FormatPipe implements PipeTransform{
    transform(users:string){

       return users.toLowerCase()
    }
}
@Pipe({
    name:'square'
})
export class SquarePipe implements PipeTransform{
    transform(currentNumber:number,item:number){
        return currentNumber**item
    }
}