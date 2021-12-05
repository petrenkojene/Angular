import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent implements OnInit {
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
