//Crie um arquivo inicio.ts para criar objetos da classe e testar os acessos.

import Cliente from "./Cliente";

const c1 = new Cliente();
c1.nome = "Mariazinha";
c1.sobrenome = "Maneirinha";
c1.email = "mariazinha@maneira.com";

console.log(`Nome Completo: ${c1.nome} ${c1.sobrenome}  ---  Email: ${c1.email}`);