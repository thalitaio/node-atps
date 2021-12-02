//  Crie um arquivo js e nele Crie duas classes, uma classe de para Pessoa e outra para Cliente. Crie um objeto de cada classe e imprima seus valores.


class Pessoa{
    interesse;
    dataNascimento;
}

class Cliente{
    nome;
    sobrenome;
    email;
}

const p1 = new Pessoa();
const c1 = new Cliente();

p1.interesse = "produtos";
p1.dataNascimento = "10/10/2010";

c1.nome = "Casemira";
c1.sobrenome = "Abreu";
c1.email = "Casemira@gamil.com";

console.log(`Interesse: ${p1.interesse} Data de Nascimento: ${p1.dataNascimento}`);
console.log(`Nome Completo: ${c1.nome} ${c1.sobrenome} E-mail: ${c1.email}`);