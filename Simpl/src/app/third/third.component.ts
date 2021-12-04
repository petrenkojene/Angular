import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
textUpper:string ="проблем настолько очевидна"
textLower:string = 'НАЦИОНАЛЬНЫЙ'
textTitle:string = 'значимость'
textTitle1:string = 'Прежде всего сложившаяся структура организации играет важную роль в формировании поэтапного и последовательного развития общества.'
textSlice:string = 'Nasty'
numberEyler:number=Math.E;
myDate = new Date();
currentObj ={
  name:"Jene",
  lastname: "Petrenko",
  age:42
}

currentNumber:number = 2;
degree:number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
