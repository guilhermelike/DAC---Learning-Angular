import { PessoaService } from './../services/pessoa.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit{
@ViewChild("formPessoa") formPessoa!: NgForm;
pessoa!: Pessoa;

constructor(
  private pessoaService: PessoaService,
  private route: ActivatedRoute,
  private router: Router
){}
  
  ngOnInit(): void {
    //snapshot.params de ActivatedRoute dá acesso aos parâmetros passados
    //operador + (antes do this) converte para número
    let id = +this.route.snapshot.params['id'];
    //com o id, obtém a pessoa
    const res = this.pessoaService.buscarPorId(id);
    if (res !== undefined)
    this.pessoa = res;
  else
    throw new Error ("Pessoa não encontrada: id = " + id);
  }

  atualizar(): void{
    //verifica se o formulário é válido
    if (this.formPessoa.form.valid){
      //efetivamente atualiza a pessoa
      this.pessoaService.atualizar(this.pessoa);
      //redireciona para /pessoas/listar
      this.router.navigate(['/pessoas']);
    }
  }

}
