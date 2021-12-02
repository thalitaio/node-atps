import { PessoaFisica } from './PessoaFisica.js';
import { PessoaJuridica  } from './PessoaJuridica.js';

const pf1 = new PessoaFisica(12345678);
const pj1 = new PessoaJuridica(1234567898);

pf1.nome = "blabla";
pf1.sobrenome = "sobrenome de blabla";
pf1.cpf = 35475474574;

console.log("Pessoa Física");
console.log(`Nome Completo: ${pf1.nome} ${pf1.sobrenome} Cpf: ${pf1.cpf}`);

pj1.nome = "PJ blabla";
pj1.sobrenome = "PJ sobrenome de blabla";
pj1.cpf = 2235475474574;

console.log("Pessoa Jurídica");
console.log(`Nome Completo: ${pj1.nome} ${pj1.sobrenome} Cnpj: ${pj1.cnpj}`);