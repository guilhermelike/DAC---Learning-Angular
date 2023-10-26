import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeuPipePipe } from './pipes';
import { MinimoValidatorDirective, NumericoDirective } from './directives';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';



@NgModule({
  declarations: [
    NumericoDirective,
    MinimoValidatorDirective,
    MeuPipePipe
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask(),
  ],
  exports: [
    MinimoValidatorDirective,
    NumericoDirective,
    MeuPipePipe,
    NgxMaskDirective,
    NgxMaskPipe
  ]
})
export class SharedModule { }
