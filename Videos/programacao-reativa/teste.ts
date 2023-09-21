import { Observable, of, from, filter, map, take, count, max, concat} from 'rxjs';

from(["Curitiba", "SJP", "Pinhais", "Colombo"]).subscribe(
    valor => console.log(valor)
);

let arr = ["Ibicaré", "Joaçaba", "Treze Tílias", "Luzerna"]
from(arr).subscribe({
    next: valor => {
        let x = 'Cidade: ' + valor;
        console.log(x)
    },
    error: valor => console.log('Erro: ' + valor),
    complete: () => console.log('acabou')
})

//Outra sintaxe do from()

let arr2 = ["Ibicaré", "Joaçaba", "Treze Tilias", "Luzerna"]
from(arr2).subscribe({
    next(valor){
        let x = 'Cidade: ' + valor;
        console.log(x);
    },
    error(valor){
        console.log('Erro: ' + valor);
    },
    complete(){
        console.log('acabou');
    }
})

of("Curitiba", 200, 4.5, true).subscribe({
    next: valor => {
        let x = 'Valor: ' + valor;
        console.log(x)
    },
    error: valor => console.log('Erro: ' + valor),
    complete: () => console.log('acabou')
})

let valores = [5, 10, 15, 20, 25, 30, 35, 40];
const obs1 = from(valores).pipe(
    filter(valor => valor % 2 == 0)
);
obs1.subscribe({
    next(valor){
        console.log(valor);
    }
})

let valores2 = [5, 10, 15, 20, 25, 30, 35, 40];
const obs2 = from(valores).pipe(
    filter(valor => valor % 2 == 0),
    map(valor => valor/10)
);
obs2.subscribe({
    next(valor){
        console.log(valor);
    }
})

let valores3 = [5, 10, 15, 20, 25, 30, 35, 40];
const obs3 = from(valores).pipe(
    filter(valor => valor % 2 == 0),
    map(valor => valor/10),
    take(2)
);
obs3.subscribe({
    next(valor){
        console.log(valor);
    }
})

let valores4 = [5, 10, 15, 20, 25, 30, 35, 40];
const obs4 = from(valores).pipe(
    filter(valor => valor % 2 == 0),
    count()
);
obs4.subscribe({
    next(valor){
        console.log(valor);
    }
})

let valores5 = [5, 10, 15, 20, 25, 30, 35, 40];
const obs5 = from(valores).pipe(
    count(valor => valor % 2 == 0)
);
obs5.subscribe({
    next(valor){
        console.log(valor);
    }
})

let valores6 = [5, 10, 15, 20, 25, 30, 35, 40];
const obs6 = from(valores).pipe(
    max()
);
obs6.subscribe({
    next(valor){
        console.log(valor);
    }
})

const obs7 = concat(obs2, obs3, obs4);
obs7.subscribe({
    next(valor){
        console.log(valor);
    }
})