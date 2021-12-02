class Cliente {
    nome;
    sobrenome;
    id;
    constructor(nome, sobrenome, id=null){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.id = id;
    }
}

export default Cliente;