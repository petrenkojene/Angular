import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  counter:number =0;
  increment(){
    this.counter++
  }
  decrement(){
    this.counter--;
    if(this.counter==-1){
      this.counter=0
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
