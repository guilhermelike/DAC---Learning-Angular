import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services';
import { Endereco } from 'src/app/shared';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEnderecoComponent } from '../modal-endereco';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {

  enderecos: Endereco[] = [];

  constructor(private enderecoService : EnderecoService, private modalService: NgbModal){}

  abrirModalEndereco(endereco: Endereco){
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  listarTodos(){
    return this.enderecoService.listarTodos();
   
  }

  remover($event: any, endereco: Endereco): void{
    $event.preventDefault();
    if(confirm(`Deseja realmente remover o endereço ${endereco.rua}?`)){
      this.enderecoService.remover(endereco.id!);
      this.enderecos = this.listarTodos();
    }
  }
}
