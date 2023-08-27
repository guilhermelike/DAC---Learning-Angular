import { Component, OnInit } from '@angular/core';
import { EnderecoService } from '../services';
import { Endereco } from 'src/app/shared/models';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {
  constructor(private enderecoService: EnderecoService){}

  ngOnInit(): void {
    this.enderecos = this.listarTodos();
  }

  enderecos: Endereco[] = [];

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
