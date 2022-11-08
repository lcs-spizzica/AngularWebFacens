import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-media-simples',
  templateUrl: './calcula-media-simples.component.html',
  styleUrls: ['./calcula-media-simples.component.css']
})
export class CalculaMediaSimplesComponent implements OnInit {

  ac1:number
  ac2:number
  ag:number
  af:number
  media:number


  constructor() { }

  ngOnInit(): void {
  }


  calcularMedia(){
    this.media =  (this.ac1 * 0.15) + (this.ac2 *0.30) + (this.ag * 0.10) + (this.af * 0.45)
  }
}
