import {Pessoa} from "./Pessoa.js";

export class PessoaFisica extends Pessoa{
    #cpf;
    set cpf(cpf){
        this.#cpf = cpf;
    }
    get cpf(){
        return this.#cpf;
    }

    constructor(cpf){
        super();
        this.cpf = cpf;
    }
}