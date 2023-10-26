import { Injectable } from '@angular/core';
import { Pessoa } from '../../shared/models'

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodos(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    //Precisa do condicional, pois retorna undefined se a chave não existe
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserir(pessoa: Pessoa): void{
    //Obtém a lista completa de pessoas
    const pessoas = this.listarTodos();

    //seta o ID único
    //para não precisar gerenciar, será usado o Timestamp
    //quantidade de segundos desde 1970
    pessoa.id = new Date().getTime();

    //adiciona no final da lista
    pessoas.push(pessoa);

    //armazena no LocalStorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas)
  }

  buscarPorId(id: number): Pessoa | undefined{
    //obtém a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    //efetua a busca
    //find() : retorna o primeiro elemento da lista que satisfaz a condição
    //caso contrário, undefined
    return pessoas.find(pessoa => pessoa.id === id);
  }

  atualizar(pessoa: Pessoa): void{
    //obtém a lista completa de pessoas
    const pessoas: Pessoa[] = this.listarTodos();

    //varre a lista de pessoas
    //quando encontra a pessoa com o mesmo id, altera a lista
    pessoas.forEach((obj, index, objs) => {
      if(pessoa.id === obj.id){
        objs[index] = pessoa
      }
    });

    //armazena a nova lista no LocalStorage
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  remover(id: number): void{
    //obtém a lista completa de pessoas
    //feito com let para poder ser alterada
    let pessoas: Pessoa[] = this.listarTodos();

    //filter(): retornar a mesma lista, com os registros
    //que satisfazem a condição, isto é, cujo id é
    //diferente do passado na função
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);

    //atualiza a lista de pessoas
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
