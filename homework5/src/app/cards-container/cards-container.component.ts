import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {
  prapor: boolean = false;
  @Output()
  myEvent : EventEmitter<boolean> = new EventEmitter();

  chang1(){
    this.prapor = !this.prapor
    this.myEvent.emit(this.prapor)
      }
  x:boolean = false;
  hendler(value){
    this.x=!value
    
  }
  
  
  
  products = [
    {id: 1, name: 'хлеб', price: 23, description: 'бездрожевой зерновой'},
    {id: 2, name: 'вода ', price: 13, description: 'слабогазированная ТМ Моршинская'},
    {id: 3, name: 'пиво', price: 36, description: 'ТМ Corona'},
    ]
    
    
  constructor() { }

  ngOnInit(): void {
    
  }

}
