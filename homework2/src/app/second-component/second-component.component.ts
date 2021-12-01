import { Component, HostListener, OnInit } from '@angular/core';

@Component({

  
  selector: 'app-second-component',
  host:{
    'keyup':'pokaz(e)'
  },
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
  
})
export class SecondComponentComponent implements OnInit {
  @HostListener('document:keyup',['$event'])
pokaz(e:any){
  if(e.code==='ArrowLeft'){
    this.increment();
  }
  if(e.code==="ArrowRight"){
    this.decrement()
  }
  }


  
  oneSrs:string='https://gl-img.rg.ru/uploads/images/2016/04/13/3996fe5c7844f7c.jpg'
 arr:string[]=[];
 
  width = 600;
  height=450
  counter:number = 0;
  

  increment(){
this.counter++;
if(this.counter==5){
  this.counter=0
}
this.show(this.counter);
  }
  decrement(){
    this.counter--;
    if(this.counter==-1){
      this.counter=this.arr.length-1
    }
    this.show(this.counter);
  }
  show(e:number){
switch (e) {
  case 0:
      this.oneSrs = this.arr[0];  
      console.log("hello")     
      break;
      case 1:
      this.oneSrs = this.arr[1];       
      break;
      case 2:
      this.oneSrs = this.arr[2];       
      break;
      case 3:
      this.oneSrs = this.arr[3];       
      break;
      case 4:
      this.oneSrs = this.arr[4];       
      break;
  
    default:
      break;
    
    
}
  }

  constructor() { 
 }

  

  ngOnInit(): void {
  this.arr.push('https://gl-img.rg.ru/uploads/images/2016/04/13/3996fe5c7844f7c.jpg')
  this.arr.push('https://eksmo.ru/upload/iblock/a42/fant_L_min.jpg')
  this.arr.push('https://gagadget.com/media/post_big/fantasy-books.jpg')
  this.arr.push('https://static.kulturologia.ru/files/u9253/fantasy-4.jpg')
  this.arr.push('https://99px.ru/sstorage/53/2013/06/tmb_72346_5030.jpg')
  
  
  
  
  }

}
