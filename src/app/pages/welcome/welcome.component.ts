import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  dollarValue = 100;
  kursValue = 27;
  result = [{
    value: this.dollarValue * this.kursValue,
    kurs: this.kursValue,
  }]
  



  constructor() { }
  
  ngOnInit() {
  }
  formatterKurs = (value: number) => `Kurs ${value}`;

  countResult():void {
    this.result.push( {
      value: this.dollarValue * this.kursValue,
      kurs: this.kursValue,
    } );
    console.log(this.result)
   }

   clearResult():void {
    this.result = []
   }
   clearLastValue():void {
    this.result.pop()
   }

  formatterPercent = (value: number) => `${value} %`;

  parserPercent = (value: string) => value.replace(' %', '');

  formatterDollar = (value: number) => `$ ${value}`;

  parserDollar = (value: string) => value.replace('$ ', '');

}
