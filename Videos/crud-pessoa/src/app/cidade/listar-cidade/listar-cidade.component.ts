import { Component, OnInit } from '@angular/core';
import { CidadeService } from '../services';
import { Cidade } from 'src/app/shared/models';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit{
  constructor(private cidadeService: CidadeService){
  }

  cidades: Cidade[] = [];

  ngOnInit(): void {
    this.cidades = this.listarTodos();
  }

  listarTodos(){
   return this.cidadeService.listarTodos();
  }

  remover($event: any, cidade: Cidade){
    $event.preventDefault();
    if(confirm(`Deseja realmente remover a cidade ${cidade.nome}`)){
      this.cidadeService.remover(cidade.id!);
      this.cidades = this.listarTodos();
    }
  }

}
