import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/shared';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-endereco',
  templateUrl: './modal-endereco.component.html',
  styleUrls: ['./modal-endereco.component.css']
})
export class ModalEnderecoComponent {
@Input() endereco!: Endereco;

constructor(public activeModal: NgbActiveModal){}

ngOnInit(): void {}
}
