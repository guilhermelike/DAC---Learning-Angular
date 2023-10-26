import { Directive, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[minimoValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MinimoValidatorDirective,
    multi: true
  }]
})

export class MinimoValidatorDirective implements Validator, OnInit {
  @Input("valorMinimo") valorMinimo: string = "0";

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  validate(control: FormControl){
    let v: number = +control.value;
    if(isNaN(v)){
      return { 'minimo': true, 'requiredValue': +this.valorMinimo}
    }
    if(v < +this.valorMinimo){
      return { 'minimo': true, 'requiredValue': this.valorMinimo}
    }
    return null;
  }
  

}
