import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  flag=true;
  changeFlag(){
    this.flag=!this.flag
  }

  constructor() { }

  ngOnInit(): void {
  }

}
