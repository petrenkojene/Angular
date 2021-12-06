import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-bloc',
  templateUrl: './card-bloc.component.html',
  styleUrls: ['./card-bloc.component.css']
  
})
export class CardBlocComponent implements OnInit {
  flag = true
x =true;

myEvent(value){
  this.x=!value
  console.log(this.x)
}
  @Input() 
  name:any;
  @Input() prapor:boolean
  
   
  

  
    @Output()
    myOven: EventEmitter<boolean> = new EventEmitter();
    change(){
      this.flag=!this.flag
      this.myOven.emit(this.flag)
    }
    
    
    
  
  

  constructor() {
    console.log('constr'+this.prapor) 
    
  }
  

  ngOnInit(): void {
    console.log('constr'+this.prapor) 
    if(this.prapor==false){
      console.log('jjdjdjj')
    }
  }

}
