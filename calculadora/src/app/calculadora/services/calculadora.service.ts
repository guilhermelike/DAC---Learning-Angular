import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  constructor() { }

  somar(numero1: number, numero2: number): number{
    let resultado : number;
    resultado = numero1 + numero2;
    return resultado;
  }

  subtrair(numero1: number, numero2: number): number{
    let resultado : number;
    resultado = numero1 - numero2;
    return resultado;
  }

  multiplicar(numero1: number, numero2: number): number{
    let resultado : number;
    resultado = numero1 * numero2;
    return resultado;
  }

  divisao(numero1: number, numero2: number): number{
    let resultado : number;
    resultado = numero1 / numero2;
    return resultado;
  }
}
