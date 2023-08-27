import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DivisaoService {
  divisao(numero1: number, numero2: number) : number{
    let resultado : number = 0;
    resultado = numero1 / numero2;
    return resultado;
  }
  constructor() { }
}
