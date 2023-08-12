import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../services';
import { Pessoa } from '../../shared/models/pessoa.model'

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {
 
  pessoas: Pessoa[] = [];

  constructor(private pessoaService : PessoaService){

  }
 
  ngOnInit(): void {
    this.pessoas = this.listarTodos();
  }

  listarTodos(): Pessoa[]{
    // return this.pessoaService.listarTodos();
    
    return [
      new Pessoa(1, "Razer", 20),
      new Pessoa(2, "Brunna", 52),
      new Pessoa(3, "Guilherme", 20),
      new Pessoa(4, "Juan", 88)
    ];
  }


}
