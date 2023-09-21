import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CidadeService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Cidade, Estado } from 'src/app/shared/models';
import { EstadoService } from 'src/app/estado/services';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit{
  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];
  
  constructor(
  private cidadeService: CidadeService,
  private route: ActivatedRoute,
  private router: Router,
  private estadoService: EstadoService
){}

  ngOnInit(): void {
    this.estados = this.estadoService.listarTodos();
    let id = +this.route.snapshot.params['id'];
    const res = this.cidadeService.buscarPorId(id);
    if(res !== undefined)
      this.cidade = res;
    else
      throw new Error ("Cidade não encontrada: id = " + id);

}

atualizar(): void{
  if(this.formCidade.form.valid){
    this.cidadeService.atualizar(this.cidade);
    this.router.navigate(['/cidade']);
  }
}
}
