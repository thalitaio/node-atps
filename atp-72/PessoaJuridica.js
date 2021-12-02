import {Pessoa} from "./Pessoa.js";

export class PessoaJuridica extends Pessoa{
    #cnpj;

    
    set cnpj(cnpj){
        this.#cnpj = cnpj;
    }
    get cnpj(){
        return this.#cnpj;
    }

    constructor(cnpj){
        super();  
        this.cnpj = cnpj;
    }
}