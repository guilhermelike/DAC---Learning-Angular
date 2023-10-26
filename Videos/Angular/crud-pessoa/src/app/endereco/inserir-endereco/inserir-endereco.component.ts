import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { EnderecoService } from '../services';
import { Router } from '@angular/router';
import { Endereco } from 'src/app/shared/models/endereco.model';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css']
})

export class InserirEnderecoComponent implements OnInit {
@ViewChild('formEndereco') formEndereco! : NgForm;
endereco! : Endereco;

constructor(
  private EnderecoService: EnderecoService, private router: Router){
}

ngOnInit(): void {
    this.endereco = new Endereco();
}

inserir(): void{
  if(this.formEndereco.form.valid){
    this.EnderecoService.inserir(this.endereco);
    this.router.navigate(["/endereco"]);
  }
}
}
