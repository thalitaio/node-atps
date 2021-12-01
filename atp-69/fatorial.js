//crie um arquivo adicione uma variável inteira com qualquer valor. Calcule o fatorial deste valor utilizando o for e imprima o resultado no terminal.


var fatorial = 100;
var resultado = fatorial;
    for (var i = 1; i < fatorial; i++) {
        resultado *= i;
    }
console.log(resultado);