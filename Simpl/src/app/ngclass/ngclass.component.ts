import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {
  
  
  
  list=['hello','Angular', 'Type script','JavaScript','']
  gerik(elem:string){
    console.log(elem)
    this.list[this.list.length-1] = elem;
    }

  constructor() { }

  ngOnInit(): void {
  }

}

