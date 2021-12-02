export class Pessoa{
   #nome;
   #sobrenome;

    set nome(nome){
    this.#nome = nome;
    }
    get nome(){
        return this.#nome;
    }

    set sobrenome(sobrenome){
        this.#sobrenome = sobrenome;
    }
    get sobrenome(){
        return this.#sobrenome;
    }

}

