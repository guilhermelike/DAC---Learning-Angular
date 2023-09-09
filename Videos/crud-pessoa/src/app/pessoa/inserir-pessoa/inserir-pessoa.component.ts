import { PessoaService } from './../services/pessoa.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/shared';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})

// Recebe uma referência do formulário aqui no componente
//'formPessoa' deve ser o nome do formulário no HTML
export class InserirPessoaComponent implements OnInit {
@ViewChild('formPessoa') formPessoa! : NgForm;
pessoa! : Pessoa;

// deve-se injetar no construtor:
// - service, para efetuar a operação
// - router, para redirecionar para a tela de listagem
// depois da inserção
constructor(
  private PessoaService: PessoaService, private router: Router
){}

ngOnInit(): void {
    //cria uma instância vazia, para não dar erro de
    // referência
    this.pessoa = new Pessoa();
}

// para inserir:
// - verifica se o formulário é válido, se não deu nenhum erro
// - se ok
// . chama o inserir do service, this.pessoa está preenchida (binding)
// . redireciona para /pessoas
inserir(): void {
  if (this.formPessoa.form.valid){
    this.PessoaService.inserir(this.pessoa);
    this.router.navigate(["/pessoas"]);
  }
}
}
