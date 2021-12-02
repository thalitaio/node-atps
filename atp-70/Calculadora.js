//Crie um arquivo para criação de uma calculadora. Adicione 4 métodos para realizar as 4 operações básicas da matemática. Realize a chamada dos 4 métodos e imprima seus resultados.

function somar(n1, n2) {
   let soma = n1 + n2;
   return soma;
}

function subtrair(n1, n2) {
    let subtracao = n1 - n2;
    return subtracao;
}

function multiplicar(n1, n2) {
    let mult = n1 * n2;
    return mult;
}

function dividir(n1, n2) {
    let divisao = n1 / n2;
    return divisao;
}

// const resultado = somar(2, 2);
// console.log(resultado);

// const resultado = subtrair(2, 2);
// console.log(resultado);

// const resultado = multiplicar(6, 2);
// console.log(resultado);

const resultado = dividir(10, 2);
console.log(resultado);