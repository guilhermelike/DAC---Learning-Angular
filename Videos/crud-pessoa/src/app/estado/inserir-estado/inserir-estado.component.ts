import { EstadoService } from './../services/estado.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Estado } from 'src/app/shared/models';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css']
})
export class InserirEstadoComponent implements OnInit{
  @ViewChild('formEstado') formEstado!: NgForm;
  estado! : Estado;

  constructor(
    private EstadoService : EstadoService,
    private router: Router
  ){}

  ngOnInit(): void {
      this.estado = new Estado();
  }

  inserir(): void{
    if(this.formEstado.form.valid){
      this.EstadoService.inserir(this.estado);
      this.router.navigate(["/estado"]);
    }
  }

}
