import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jacket',
  templateUrl: './jacket.component.html',
  styleUrls: ['./jacket.component.css']
})
export class JacketComponent implements OnInit {
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
