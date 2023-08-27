import { Component, OnInit } from '@angular/core';
import { DivisaoService } from '../services';

@Component({
  selector: 'app-divisao',
  templateUrl: './divisao.component.html',
  styleUrls: ['./divisao.component.css']
})
export class DivisaoComponent implements OnInit {
  constructor(private divisaoService : DivisaoService){

  }

  ngOnInit(): void {
    
  }

  private res : number = 0;

  get resultado(): string{
    return this.res.toString();

  }

divisao(numero1 : string, numero2 : string): void{
  let n1 : number;
  let n2 : number;
  n1 = parseFloat(numero1);
  n2 = parseFloat(numero2);

  this.res = this.divisaoService.divisao(n1, n2);
}

}
