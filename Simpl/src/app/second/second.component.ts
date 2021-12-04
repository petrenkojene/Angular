import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  chengColor(item1:any,item2:any){

switch (item1.value) {
  case '1':
    item2.style.backgroundColor= 'green'
    
    break;
    case '2':
    item2.style.backgroundColor= 'red'
    
    break;
    case '3':
    item2.style.backgroundColor= 'blue'
    
    break;
    case '4':
    item2.style.backgroundColor= 'orange'
    
    break;

  default:
    break;
}
  }

  constructor() { }

  ngOnInit(): void {
  }

}
