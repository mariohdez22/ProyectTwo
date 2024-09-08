import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculado',
  templateUrl: './calculado.component.html',
  styleUrls: ['./calculado.component.css']
})
export class CalculadoComponent implements OnInit {

  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;

  constructor() {
  }

  ngOnInit(): void {}

  pressKey1(miVariable: any){
    this.num1 =+ miVariable.target.value;
  }

  pressKey2(miVariable: any){
    this.num2 =+ miVariable.target.value;
  }

  sum(){
    this.resultado = this.num1 + this.num2;
  }
}
