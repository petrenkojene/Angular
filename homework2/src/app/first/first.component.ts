import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor() { }
  dogImage: string = 'assets/img/ALIH9525.jpg';
  dogImageWid: number = 600;
  dogImageHeight: number = 412.775;
  dogImage1: string = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Brooks_Chase_Ranger_of_Jolly_Dogs_Jack_Russell.jpg';

  ngOnInit(): void {
  }

}
