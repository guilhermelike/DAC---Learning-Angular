import { Directive, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[Numerico]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumericoDirective,
    multi: true
  }]
})

export class NumericoDirective {

  constructor() { }

@HostListener('keyup', ['$event'])
onKeyUp($event: any){
  let valor = $event.target.value;
  valor = valor.replace(/[\D]/g, '');
  $event.target.value = valor;
}
}

