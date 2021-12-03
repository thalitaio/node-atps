// Crie uma classe cliente, com atributos privados, getters e setters, adicionando a tipagem dos atributos, dos parâmetros e dos retornos. 
class Cliente {
    get nome() {
        return this._nome;
    }
    set nome(v) {
        this._nome = v;
    }
    set sobrenome(v) {
        this._sobrenome = v;
    }
    get sobrenome() {
        return this._sobrenome;
    }
    set email(v) {
        this._email = v;
    }
    get email() {
        return this._email;
    }
    set id(v) {
        this._id = v;
    }
    get id() {
        return this._id;
    }
}
export default Cliente;
